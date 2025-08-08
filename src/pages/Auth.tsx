import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Auth = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        navigate('/admin', { replace: true });
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate('/admin', { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setIsLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Connexion réussie');
      navigate('/admin', { replace: true });
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const redirectUrl = `${window.location.origin}/admin`;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectUrl },
    });
    setIsLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Inscription réussie. Vérifiez votre e-mail pour confirmer.');
    }
  };

  const handleResendConfirmation = async () => {
    if (!email) {
      toast.error("Entrez votre e-mail d’abord");
      return;
    }
    try {
      setIsResending(true);
      const { error } = await supabase.auth.resend({ type: 'signup', email });
      if (error) throw error;
      toast.success("E‑mail de confirmation renvoyé. Vérifiez votre boîte et les spams.");
    } catch (e: any) {
      toast.error(e.message || "Impossible de renvoyer l’e‑mail pour le moment.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{mode === 'signin' ? 'Connexion' : 'Inscription'}</CardTitle>
          <CardDescription>
            {mode === 'signin' ? 'Accédez à votre espace administrateur' : "Créez un compte avec votre e-mail d'administrateur"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            <Button variant={mode === 'signin' ? 'default' : 'outline'} onClick={() => setMode('signin')}>
              Se connecter
            </Button>
            <Button variant={mode === 'signup' ? 'default' : 'outline'} onClick={() => setMode('signup')}>
              S'inscrire
            </Button>
          </div>

          <form onSubmit={mode === 'signin' ? handleSignIn : handleSignUp} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="vous@exemple.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Mot de passe</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Veuillez patienter…' : mode === 'signin' ? 'Se connecter' : "S'inscrire"}
            </Button>
          </form>

          <div className="mt-3">
            <Button variant="ghost" size="sm" disabled={!email || isResending} onClick={handleResendConfirmation}>
              {isResending ? "Renvoi en cours…" : "Renvoyer l'e-mail de confirmation"}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Astuce: seul l'e-mail admin autorisé peut gérer les contenus: <strong>info@horsetruckgarage.com</strong>
          </p>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm underline">Retour à l'accueil</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;