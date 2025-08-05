import { Star, Quote } from "lucide-react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Lyon, France",
      rating: 5,
      date: "Il y a 2 semaines",
      text: "Service exceptionnel ! L'équipe HTG m'a trouvé le camion chevaux parfait pour mon centre équestre. Livraison rapide et véhicule conforme à la description. Je recommande vivement !",
      verified: true
    },
    {
      id: 2,
      name: "Pierre Leclerc",
      location: "Bordeaux, France",
      date: "Il y a 1 mois",
      rating: 5,
      text: "Professionnalisme remarquable. Le van acheté chez HTG fonctionne parfaitement depuis 6 mois. Financement facilité et SAV au top. Excellent rapport qualité-prix.",
      verified: true
    },
    {
      id: 3,
      name: "Sophie Martin",
      location: "Normandie, France",
      date: "Il y a 3 semaines",
      rating: 5,
      text: "HTG m'a accompagnée dans l'achat de ma première remorque chevaux. Conseils pertinents, transparence totale. Mon cheval voyage maintenant dans d'excellentes conditions !",
      verified: true
    },
    {
      id: 4,
      name: "Laurent Rousseau",
      location: "Provence, France",
      date: "Il y a 2 mois",
      rating: 5,
      text: "15 ans d'expérience ça se ressent ! Camion livré dans les délais avec tous les équipements promis. Service client très réactif. Je reviendrai sans hésiter.",
      verified: true
    },
    {
      id: 5,
      name: "Camille Bernard",
      location: "Bretagne, France",
      date: "Il y a 1 semaine",
      rating: 5,
      text: "Qualité irréprochable ! Van chevaux acheté il y a 2 ans, toujours en parfait état. L'équipe HTG assure un suivi exceptionnel même après-vente. Très satisfaite.",
      verified: true
    },
    {
      id: 6,
      name: "David Moreau",
      location: "Auvergne, France",
      date: "Il y a 3 mois",
      rating: 5,
      text: "Service haut de gamme comme promis. Personnel compétent, véhicule impeccable. HTG comprend vraiment les besoins des professionnels équins. À recommander sans réserve !",
      verified: true
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Note moyenne" },
    { value: "250+", label: "Avis Google" },
    { value: "98%", label: "Recommandations" },
    { value: "100%", label: "Avis vérifiés" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-copper fill-copper" />
            <span className="text-copper font-semibold">Avis Clients Google</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Ce que Disent</span>
            <span className="block htg-text-gradient">Nos Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages 
            authentiques publiés sur Google.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-copper mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className="htg-card p-6 space-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {review.verified && (
                    <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      Vérifié
                    </div>
                  )}
                  <Quote className="w-6 h-6 text-copper/30" />
                </div>
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>

              {/* Google Badge */}
              <div className="flex items-center space-x-2 pt-2 border-t border-border">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs text-muted-foreground">Avis Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="htg-card max-w-2xl mx-auto p-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Voir Tous nos Avis Google
              </h3>
              <p className="text-muted-foreground">
                Plus de 250 avis clients vérifiés avec une note moyenne de 4.9/5
              </p>
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground">Partagez votre expérience avec HTG – Votre avis compte.</p>
              </div>
              <div className="flex justify-center">
                <button className="htg-button-secondary" onClick={() => {
                  window.open('https://www.google.com/search?q=HTG+Horse+Truck+Garage+avis', '_blank');
                }}>
                  Laisser un Avis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;