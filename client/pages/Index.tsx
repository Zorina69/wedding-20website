import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MapPin, Clock, Users, Gift } from "lucide-react";

export default function Index() {
  const [timeUntilWedding, setTimeUntilWedding] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Wedding date - update this to the actual date
  const weddingDate = new Date("2024-08-15T16:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeUntilWedding({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-white to-wedding-blush">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-wedding-sage/20 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-wedding-rose" />
              <span className="text-2xl font-serif text-gray-800">Sarah & Michael</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-wedding-rose transition-colors">Home</a>
              <a href="#story" className="text-gray-700 hover:text-wedding-rose transition-colors">Our Story</a>
              <a href="#details" className="text-gray-700 hover:text-wedding-rose transition-colors">Details</a>
              <a href="#rsvp" className="text-gray-700 hover:text-wedding-rose transition-colors">RSVP</a>
              <a href="#registry" className="text-gray-700 hover:text-wedding-rose transition-colors">Registry</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-4">
              Sarah <span className="text-wedding-rose">&</span> Michael
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">are getting married!</p>
            <p className="text-lg text-gray-500">August 15th, 2024 • Napa Valley, California</p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <Card className="bg-white/60 backdrop-blur-sm border-wedding-sage/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-wedding-rose">{timeUntilWedding.days}</div>
                <div className="text-sm text-gray-600">Days</div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-wedding-sage/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-wedding-rose">{timeUntilWedding.hours}</div>
                <div className="text-sm text-gray-600">Hours</div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-wedding-sage/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-wedding-rose">{timeUntilWedding.minutes}</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-wedding-sage/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-wedding-rose">{timeUntilWedding.seconds}</div>
                <div className="text-sm text-gray-600">Seconds</div>
              </CardContent>
            </Card>
          </div>

          <Button 
            size="lg" 
            className="bg-wedding-rose hover:bg-wedding-rose/90 text-white px-8 py-3 text-lg rounded-full"
          >
            RSVP Now
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">Our Love Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We met during a rainy autumn morning at a cozy coffee shop in downtown Portland. 
                Michael was reading a book about astronomy, and Sarah couldn't help but notice 
                the constellation bookmark peeking out from the pages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Three years, countless adventures, and one magical proposal under the northern 
                lights later, we're ready to begin our greatest journey together as husband and wife.
              </p>
            </div>
            <div className="bg-wedding-blush/30 rounded-lg h-64 flex items-center justify-center">
              <Heart className="h-16 w-16 text-wedding-rose" />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-gray-800 text-center mb-12">Wedding Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <Card className="bg-white/80 backdrop-blur-sm border-wedding-sage/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-wedding-rose" />
                  <h3 className="text-2xl font-serif text-gray-800">Ceremony</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>Saturday, August 15th, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>Silverado Resort & Spa<br />1600 Atlas Peak Rd, Napa, CA 94558</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reception */}
            <Card className="bg-white/80 backdrop-blur-sm border-wedding-sage/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-wedding-rose" />
                  <h3 className="text-2xl font-serif text-gray-800">Reception</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>Saturday, August 15th, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>6:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>Same venue - Outdoor Pavilion<br />Dinner, dancing & celebration!</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-16 px-4 bg-wedding-sage/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">RSVP</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We can't wait to celebrate with you! Please respond by June 15th, 2024.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-wedding-rose hover:bg-wedding-rose/90 text-white px-8 py-3 text-lg rounded-full w-full md:w-auto"
            >
              Yes, I'll be there!
            </Button>
            <div className="text-sm text-gray-500">
              Questions? Contact us at sarah.michael.wedding@email.com
            </div>
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">Wedding Registry</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Your presence is the greatest gift, but if you'd like to celebrate with a gift, 
            we've registered at a few of our favorite places.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-wedding-rose text-wedding-rose hover:bg-wedding-rose hover:text-white"
            >
              <Gift className="h-5 w-5 mr-2" />
              View Registry
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-wedding-sage/20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-wedding-rose" />
            <span className="text-lg font-serif text-gray-700">Sarah & Michael</span>
            <Heart className="h-5 w-5 text-wedding-rose" />
          </div>
          <p className="text-gray-600 text-sm">
            August 15th, 2024 • Napa Valley, California
          </p>
        </div>
      </footer>
    </div>
  );
}
