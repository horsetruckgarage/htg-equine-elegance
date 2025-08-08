import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Download, Plus, Edit, Trash2, ArrowUp, ArrowDown, ImagePlus, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useVehicles } from '@/hooks/useSupabaseVehicles';
import { supabase } from '@/integrations/supabase/client';
import { useWatermark } from '@/hooks/useWatermark';

interface VehicleFormData {
  name: string;
  type: 'truck' | 'van' | 'trailer';
  price: number;
  year?: number;
  mileage?: number;
  capacity?: string;
  transmission?: string;
  fuel?: string;
  power?: string;
  description?: string;
  available: boolean;
  featured: boolean;
}

const ProductsManager = () => {
  const { vehicles: products, loading, error } = useVehicles();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [editImages, setEditImages] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const queryClient = useQueryClient();
  const { addWatermarkToImage } = useWatermark();

  const [formData, setFormData] = useState<VehicleFormData>({
    name: '',
    type: 'truck',
    price: 0,
    year: new Date().getFullYear(),
    mileage: 0,
    capacity: '',
    transmission: '',
    fuel: 'diesel',
    power: '',
    description: '',
    available: true,
    featured: false,
  });

  const createVehicleMutation = useMutation({
    mutationFn: async (data: VehicleFormData) => {
      let lastErr: any = null;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const { data: vehicle, error } = await supabase
            .from('vehicles')
            .insert([data])
            .select()
            .maybeSingle();

          if (error) throw error;
          if (!vehicle) throw new Error('Insertion échouée (aucune donnée retournée)');
          return vehicle;
        } catch (e: any) {
          lastErr = e;
          const msg = String(e?.message || e);
          // Retry on transient network errors (Safari: "TypeError: Load failed")
          if (e?.name === 'TypeError' || /load failed/i.test(msg)) {
            await new Promise((r) => setTimeout(r, 500 + attempt * 300));
            continue;
          }
          throw e;
        }
      }
      throw lastErr;
    },
    onSuccess: async (vehicle) => {
      try {
        if (imageFiles.length > 0) {
          toast.info('Téléversement des images...');
          await uploadAndInsertImages(vehicle.id, imageFiles);
        }
        toast.success('Véhicule créé avec succès');
      } catch (e: any) {
        toast.error("Créé, mais erreur d'upload images: " + e.message);
      } finally {
        setIsCreateDialogOpen(false);
        setImageFiles([]);
        resetForm();
        queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      }
    },
    onError: (error) => {
      toast.error('Erreur lors de la création: ' + error.message);
    },
  });

  const updateVehicleMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<VehicleFormData> }) => {
      const { data: vehicle, error } = await supabase
        .from('vehicles')
        .update(data)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return vehicle;
    },
    onSuccess: () => {
      toast.success('Véhicule modifié avec succès');
      setIsEditDialogOpen(false);
      setEditingProduct(null);
      resetForm();
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
    },
    onError: (error) => {
      toast.error('Erreur lors de la modification: ' + error.message);
    },
  });

  const deleteVehicleMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('vehicles')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Véhicule supprimé avec succès');
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
    },
    onError: (error) => {
      toast.error('Erreur lors de la suppression: ' + error.message);
    },
  });

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'truck',
      price: 0,
      year: new Date().getFullYear(),
      mileage: 0,
      capacity: '',
      transmission: '',
      fuel: 'diesel',
      power: '',
      description: '',
      available: true,
      featured: false,
    });
  };

  const handleCreate = () => {
    createVehicleMutation.mutate(formData);
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name || '',
      type: product.type || 'truck',
      price: Number(product.price) || 0,
      year: product.year || new Date().getFullYear(),
      mileage: product.mileage || 0,
      capacity: product.capacity || '',
      transmission: product.transmission || '',
      fuel: product.fuel || 'diesel',
      power: product.power || '',
      description: product.description || '',
      available: product.availability === 'available_immediately',
      featured: product.featured || false,
    });
    setIsEditDialogOpen(true);
    setImageFiles([]);
    fetchEditImages(product.id);
  };

  const handleUpdate = () => {
    if (!editingProduct) return;
    updateVehicleMutation.mutate({ 
      id: editingProduct.id, 
      data: {
        ...formData,
        available: formData.available,
      }
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      deleteVehicleMutation.mutate(id);
    }
  };

  // Images management helpers
  const fetchEditImages = async (vehicleId: string) => {
    const { data, error } = await supabase
      .from('vehicle_images')
      .select('*')
      .eq('vehicle_id', vehicleId)
      .order('sort_order', { ascending: true });
    if (error) {
      toast.error('Erreur de chargement des images');
      return;
    }
    setEditImages(data || []);
  };

  const getStoragePath = (url: string) => {
    const marker = '/storage/v1/object/public/vehicles/';
    const idx = url.indexOf(marker);
    return idx !== -1 ? url.substring(idx + marker.length) : null;
  };

  // Process watermarking in small batches to avoid mobile freezes
  const watermarkInBatches = async (files: File[], batchSize = 3) => {
    const results: File[] = [];
    for (let i = 0; i < files.length; i += batchSize) {
      const slice = files.slice(i, i + batchSize);
      const processed = await Promise.all(
        slice.map(async (f) => {
          try {
            return await addWatermarkToImage(f);
          } catch {
            return f; // fallback to original if watermark fails
          }
        })
      );
      results.push(...processed);
    }
    return results;
  };

  // Promise timeout wrapper to avoid infinite waits on poor networks
  const withTimeout = <T,>(p: PromiseLike<T>, ms = 60000) =>
    new Promise<T>((resolve, reject) => {
      const t = setTimeout(() => reject(new Error('Timeout')), ms);
      p.then(
        (v) => {
          clearTimeout(t);
          resolve(v);
        },
        (e) => {
          clearTimeout(t);
          reject(e);
        }
      );
    });

  const uploadAndInsertImages = async (vehicleId: string, files: File[]) => {
    setIsUploading(true);
    try {
      const { data: existing } = await withTimeout(
        supabase.from('vehicle_images').select('id').eq('vehicle_id', vehicleId),
        20000
      );
      let start = existing?.length || 0;

      const CHUNK_SIZE = 4;
      let uploadedCount = 0;
      const uploadOnce = (path: string, file: File, timeoutMs = 60000) =>
        new Promise<void>((resolve, reject) => {
          const timer = setTimeout(() => reject(new Error('Timeout upload')), timeoutMs);
          supabase.storage
            .from('vehicles')
            .upload(path, file, { cacheControl: '31536000', upsert: false })
            .then(({ error }) => {
              clearTimeout(timer);
              error ? reject(error) : resolve();
            })
            .catch((err) => {
              clearTimeout(timer);
              reject(err);
            });
        });

      for (let i = 0; i < files.length; i += CHUNK_SIZE) {
        const slice = files.slice(i, i + CHUNK_SIZE);
        await Promise.allSettled(
          slice.map(async (file, idx) => {
            const globalIndex = i + idx;
            const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '-').toLowerCase();
            const basePath = `${vehicleId}/${Date.now()}_${globalIndex}_${safeName}`;
            let usedPath = basePath;

            try {
              await uploadOnce(basePath, file);
            } catch (err) {
              const retryPath = `${vehicleId}/${Date.now()}_${globalIndex}_r_${safeName}`;
              try {
                await uploadOnce(retryPath, file);
                usedPath = retryPath;
              } catch (e) {
                console.error('Upload failed:', e);
                return;
              }
            }

            const { data: pub } = supabase.storage.from('vehicles').getPublicUrl(usedPath);
            const isPrimary = start === 0 && globalIndex === 0;
            const { error: insErr } = await withTimeout(
              supabase.from('vehicle_images').insert({
                vehicle_id: vehicleId,
                sort_order: start + globalIndex + 1,
                image_url: pub.publicUrl,
                is_primary: isPrimary,
              }),
              20000
            );
            if (!insErr) uploadedCount++;
          })
        );
      }
      toast.success(`Images ajoutées (${uploadedCount}/${files.length})`);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteImage = async (img: any) => {
    const path = getStoragePath(img.image_url);
    if (path) {
      await supabase.storage.from('vehicles').remove([path]);
    }
    await supabase.from('vehicle_images').delete().eq('id', img.id);
    await fetchEditImages(editingProduct.id);
    toast.success('Image supprimée');
  };

  const setPrimary = async (img: any) => {
    const vehicleId = editingProduct.id;
    await supabase.from('vehicle_images').update({ is_primary: false }).eq('vehicle_id', vehicleId);
    await supabase.from('vehicle_images').update({ is_primary: true }).eq('id', img.id);
    await fetchEditImages(vehicleId);
    toast.success('Définie comme principale');
  };

  const moveImage = async (img: any, direction: 'up' | 'down') => {
    const idx = editImages.findIndex((i) => i.id === img.id);
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (idx === -1 || targetIdx < 0 || targetIdx >= editImages.length) return;
    const a = editImages[idx];
    const b = editImages[targetIdx];
    await supabase.from('vehicle_images').update({ sort_order: b.sort_order }).eq('id', a.id);
    await supabase.from('vehicle_images').update({ sort_order: a.sort_order }).eq('id', b.id);
    await fetchEditImages(editingProduct.id);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || product.type === selectedCategory)
  );

  const categories = ['all', ...new Set(products.map(p => p.type))];

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Gestion des Véhicules</h2>
          <p className="text-muted-foreground">Gérez votre catalogue de véhicules</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nouveau Véhicule
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Ajouter un nouveau véhicule</DialogTitle>
                <DialogDescription>
                  Remplissez les informations du véhicule
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ex: Renault Master L3H2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type *</Label>
                  <Select value={formData.type} onValueChange={(value: 'truck' | 'van' | 'trailer') => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="truck">Camion</SelectItem>
                      <SelectItem value="van">Van</SelectItem>
                      <SelectItem value="trailer">Remorque</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Prix *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                    placeholder="Ex: 45000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Année</Label>
                  <Input
                    id="year"
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: Number(e.target.value)})}
                    placeholder="Ex: 2023"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mileage">Kilométrage</Label>
                  <Input
                    id="mileage"
                    type="number"
                    value={formData.mileage}
                    onChange={(e) => setFormData({...formData, mileage: Number(e.target.value)})}
                    placeholder="Ex: 45000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacité</Label>
                  <Input
                    id="capacity"
                    value={formData.capacity}
                    onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                    placeholder="Ex: 3 chevaux"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="power">Puissance</Label>
                  <Input
                    id="power"
                    value={formData.power}
                    onChange={(e) => setFormData({...formData, power: e.target.value})}
                    placeholder="Ex: 170 CV"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fuel">Carburant</Label>
                  <Select value={formData.fuel} onValueChange={(value) => setFormData({...formData, fuel: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="essence">Essence</SelectItem>
                      <SelectItem value="electrique">Électrique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Description du véhicule..."
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="images">Images du véhicule</Label>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={async (e) => {
                      const files = Array.from(e.target.files || []);
                      if (files.length > 0) {
                        toast.info('Ajout des filigranes en cours...');
                        const watermarkedFiles = await watermarkInBatches(files, 3);
                        setImageFiles(watermarkedFiles);
                      }
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    Le filigrane HTG sera automatiquement ajouté aux images. Vous pouvez sélectionner jusqu'à 20 images ou plus.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="available"
                    checked={formData.available}
                    onChange={(e) => setFormData({...formData, available: e.target.checked})}
                  />
                  <Label htmlFor="available">Disponible</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  />
                  <Label htmlFor="featured">En vedette</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Annuler
                </Button>
                <Button onClick={handleCreate} disabled={createVehicleMutation.isPending}>
                  {createVehicleMutation.isPending ? 'Création...' : 'Créer'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Véhicules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {products.filter(p => p.availability === 'available_immediately').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En Vedette</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {products.filter(p => p.featured).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Catégories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(products.map(p => p.type)).size}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Rechercher un véhicule..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 py-2 border border-input rounded-md"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-input rounded-md"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'Toutes les catégories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Véhicules ({filteredProducts.length})</CardTitle>
          <CardDescription>
            Liste de tous les véhicules dans la base de données
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <Package className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.type} • {product.year} • {product.mileage} km
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{product.price}€</p>
                  <p className="text-sm text-muted-foreground">
                    {product.availability === 'available_immediately' ? 'Disponible' : 'Non disponible'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-600"
                    onClick={() => handleDelete(product.id.toString())}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Modifier le véhicule</DialogTitle>
            <DialogDescription>
              Modifiez les informations du véhicule
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            {/* Same form fields as create dialog */}
            <div className="space-y-2">
              <Label htmlFor="edit-name">Nom *</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ex: Renault Master L3H2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-type">Type *</Label>
              <Select value={formData.type} onValueChange={(value: 'truck' | 'van' | 'trailer') => setFormData({...formData, type: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="truck">Camion</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                  <SelectItem value="trailer">Remorque</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-price">Prix *</Label>
              <Input
                id="edit-price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                placeholder="Ex: 45000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-year">Année</Label>
              <Input
                id="edit-year"
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({...formData, year: Number(e.target.value)})}
                placeholder="Ex: 2023"
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Description du véhicule..."
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="edit-available"
                checked={formData.available}
                onChange={(e) => setFormData({...formData, available: e.target.checked})}
              />
              <Label htmlFor="edit-available">Disponible</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="edit-featured"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
              />
              <Label htmlFor="edit-featured">En vedette</Label>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <Label>Gérer les images</Label>
            <div className="flex items-center gap-3">
              <Input
                id="edit-images"
                type="file"
                multiple
                accept="image/*"
                onChange={async (e) => {
                  const files = Array.from(e.target.files || []);
                  if (!editingProduct || files.length === 0) return;
                  toast.info('Ajout des filigranes en cours...');
                  const watermarkedFiles = await watermarkInBatches(files, 3);
                  await uploadAndInsertImages(editingProduct.id, watermarkedFiles);
                  await fetchEditImages(editingProduct.id);
                  (e.target as HTMLInputElement).value = '';
                }}
              />
              {isUploading && <span className="text-sm text-muted-foreground">Téléversement en cours...</span>}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {editImages.map((img) => (
                <div key={img.id} className="relative border rounded overflow-hidden">
                  <img src={img.image_url} alt={formData.name} className="w-full h-28 object-cover" />
                  {img.is_primary && (
                    <div className="absolute top-1 left-1 bg-copper text-black text-xs px-2 py-0.5 rounded flex items-center">
                      <Star className="w-3 h-3 mr-1" /> Principale
                    </div>
                  )}
                  <div className="absolute bottom-1 left-1 right-1 flex justify-between gap-1">
                    <Button size="icon" variant="secondary" className="w-8 h-8" onClick={() => moveImage(img, 'up')}>
                      <ArrowUp className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="w-8 h-8" onClick={() => setPrimary(img)}>
                      <Star className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="w-8 h-8" onClick={() => moveImage(img, 'down')}>
                      <ArrowDown className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="w-8 h-8 text-red-600" onClick={() => deleteImage(img)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleUpdate} disabled={updateVehicleMutation.isPending}>
              {updateVehicleMutation.isPending ? 'Modification...' : 'Modifier'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsManager;