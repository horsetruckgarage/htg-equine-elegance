import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut,
  TrendingUp,
  Star,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { toast } from 'sonner';
import AdminLogin from '@/components/admin/AdminLogin';
import ProductsManager from '@/components/admin/ProductsManager';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/productService';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const authStatus = localStorage.getItem('admin-authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-authenticated');
    setIsAuthenticated(false);
    setActiveTab('dashboard');
    toast.success('Déconnexion réussie');
  };

  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const sidebarItems = [
    { id: 'dashboard', title: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'products', title: 'Produits', icon: Package },
    { id: 'orders', title: 'Commandes', icon: ShoppingCart },
    { id: 'customers', title: 'Clients', icon: Users },
    { id: 'settings', title: 'Paramètres', icon: Settings },
  ];

  const stats = {
    totalProducts: products.length,
    inStock: products.filter(p => p.in_stock).length,
    featured: products.filter(p => p.featured).length,
    lowStock: products.filter(p => !p.in_stock).length,
  };

  const DashboardOverview = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Tableau de bord</h2>
        <p className="text-muted-foreground">Vue d'ensemble de votre activité</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Produits</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">
              +2 depuis le mois dernier
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Stock</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inStock}</div>
            <p className="text-xs text-muted-foreground">
              {((stats.inStock / stats.totalProducts) * 100).toFixed(1)}% du total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produits Vedettes</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.featured}</div>
            <p className="text-xs text-muted-foreground">
              Mis en avant sur le site
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stock Faible</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.lowStock}</div>
            <p className="text-xs text-muted-foreground">
              Produits en rupture
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions Rapides</CardTitle>
          <CardDescription>Raccourcis vers les tâches courantes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              onClick={() => setActiveTab('products')}
            >
              <Package className="h-6 w-6 mb-2" />
              Gérer les Produits
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              disabled
            >
              <ShoppingCart className="h-6 w-6 mb-2" />
              Voir les Commandes
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              disabled
            >
              <BarChart3 className="h-6 w-6 mb-2" />
              Rapports & Analytics
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Products */}
      <Card>
        <CardHeader>
          <CardTitle>Produits Récents</CardTitle>
          <CardDescription>Les 5 derniers produits ajoutés</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <Package className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div className="text-sm font-medium">{product.price}€</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ComingSoon = ({ title }: { title: string }) => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground">Cette fonctionnalité sera bientôt disponible</p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Fonctionnalité en développement</h3>
            <p className="text-muted-foreground">
              Cette section sera disponible dans une prochaine mise à jour.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'products':
        return <ProductsManager />;
      case 'orders':
        return <ComingSoon title="Commandes" />;
      case 'customers':
        return <ComingSoon title="Clients" />;
      case 'settings':
        return <ComingSoon title="Paramètres" />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="w-64">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Administration</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => setActiveTab(item.id)}
                        className={activeTab === item.id ? 'bg-muted' : ''}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={handleLogout}>
                      <LogOut className="h-4 w-4" />
                      <span>Déconnexion</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1">
          <header className="h-14 border-b bg-background flex items-center px-6">
            <SidebarTrigger />
            <div className="ml-auto">
              <p className="text-sm text-muted-foreground">
                Connecté en tant qu'administrateur
              </p>
            </div>
          </header>
          
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;