import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Download, Plus } from 'lucide-react';
import { useVehicles } from '@/hooks/useSupabaseVehicles';

const ProductsManager = () => {
  const { vehicles: products, loading, error } = useVehicles();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nouveau Véhicule
          </Button>
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
                    {product.type} • {product.year} • {product.mileage}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{product.price}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.availability === 'available_immediately' ? 'Disponible' : 'Non disponible'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600">
                    Supprimer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsManager;