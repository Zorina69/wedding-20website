import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MapPin, Clock, Users, Gift } from "lucide-react";
import photo1 from "./photo/photo_2025-08-20_17-17-59.jpg";
import photo2 from "./photo/photo_2025-08-20_17-18-12.jpg";
import photo3 from "./photo/photo_2023-09-20_23-23-44.jpg";
import sreykaa from "./photo/photo_2025-08-21_11-00-22.jpg";
import ratana from "./photo/photo_2025-08-21_11-00-33.jpg";

export default function Index() {
  const [timeUntilWedding, setTimeUntilWedding] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [rsvpClicked, setRsvpClicked] = useState(false);

  const weddingDate = new Date("2030-02-24T16:00:00");

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
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-white to-rose-100 overflow-hidden">

      {/* Floating Hearts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-pink-300 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-rose-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500 animate-pulse" />
            <span className="text-2xl font-serif text-gray-800">Sreykaa & Ratana</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["home","story","details","response","registry"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1).replace("-", " ")}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-4 animate-fadeIn">
          Hout Sreykaa <span className="text-rose-500"><br />& <br /></span> Soy Chanratana
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-2 animate-fadeIn delay-200">
          are getting engaged!
        </p>
        <p className="text-lg text-gray-500 mb-8 animate-fadeIn delay-400">
          February 24th, 2030 • Phnom Penh, Cambodia
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {Object.entries(timeUntilWedding).map(([unit, value]) => (
            <Card
              key={unit}
              className="bg-white/60 backdrop-blur-sm border-rose-200/50 transform hover:scale-105 transition-transform duration-500"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-rose-500">{value}</div>
                <div className="text-sm text-gray-600 capitalize">{unit}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Photo */}
      <section>
        <div className="flex items-center justify-center gap-8 max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <img
              src={sreykaa}
              className="w-40 h-40 object-cover rounded-full border-4 border-rose-200 shadow-lg transition-transform duration-300 group-hover:scale-105"
              alt="Sreykaa"
            />
            <span className="block mt-2 text-center text-gray-700 font-serif text-lg">Sreykaa</span>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="h-16 w-16 text-rose-400 drop-shadow-lg animate-pulse" />
            <span className="text-2xl font-serif text-rose-400 mt-2">&</span>
          </div>
          <div className="relative group">
            <img
              src={ratana}
              className="w-40 h-40 object-cover rounded-full border-4 border-rose-200 shadow-lg transition-transform duration-300 group-hover:scale-105"
              alt="Ratana"
            />
            <span className="block mt-2 text-center text-gray-700 font-serif text-lg">Ratana</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-20 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-12 animate-fadeIn">
            Our Love Story
          </h2>
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-gray-600 leading-relaxed animate-fadeIn delay-200">
                Who would have thought that a simple visit to a café would change our lives forever? One unexpected glance across the room, and in that instant, the world seemed to disappear. From that magical beginning came three unforgettable years of laughter, adventures, and love deeper than we ever imagined. And under the breathtaking northern lights, a proposal turned our story into a forever—now, with hearts full of wonder, we are ready for the greatest journey of our lives together.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-lg overflow-hidden animate-fadeIn delay-600">
              <img src={photo1} className="w-full h-48 object-cover rounded-lg" />
              <img src={photo2} className="w-full h-48 object-cover rounded-lg" />
              <img src={photo3} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-12">Engagement Details</h2>
          <div className="md:grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-rose-200/50 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-rose-500" />
                  <h3 className="text-2xl font-serif text-gray-800">Ceremony</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3"><Calendar className="h-5 w-5" /> Sunday, February 24th, 2030</div>
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5" /> 4:00 PM</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Hyatt Regency Phnom Penh</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-rose-200/50 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-rose-500" />
                  <h3 className="text-2xl font-serif text-gray-800">Reception</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3"><Calendar className="h-5 w-5" /> Sunday, February 24th, 2030</div>
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5" /> 6:00 PM - 11:00 PM</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Same venue - Outdoor Pavilion, Dinner & Celebration</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Section */}
      <section id="response" className="py-16 px-4 bg-wedding-sage/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">Response</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We can't wait to celebrate with you! Please respond by February 20th, 2030.
          </p>

          {rsvpClicked ? (
            <p className="text-xl font-semibold text-wedding-rose">
              Thank you for your Response!
            </p>
          ) : (
            <Button
              size="lg"
              className="bg-rose-500 hover:bg-rose-400 text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105 animate-bounce"
              onClick={() => setRsvpClicked(true)}
            >
              Yes, I will attend!
              <Heart className="h-5 w-5 ml-2 inline-block" />
            </Button>
            
          )}

          <div className="text-sm text-gray-500 mt-4">
            Questions? Contact us at sreykaa.ratana.wedding@email.com
          </div>
        </div>
      </section>

      {/* Registry (changed to View Location) */}
      <section id="registry" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-8">Engagement Location</h2>
        <p className="text-gray-600 mb-8 text-lg">
          We would be honored to celebrate with you at our engagement venue. Click below to view the location and directions.
        </p>
        <Button
          asChild
          variant="outline"
          className=" border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto"
          style={{ width: "180px", minWidth: "150px", maxWidth: "200px" }}
        >
          <a
            href="https://maps.app.goo.gl/hYbSZX6gdAb5naTKA?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="h-5 w-5 mr-2" /> View Location
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-rose-100 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-rose-500 animate-pulse" />
          <span className="text-lg font-serif text-gray-700">Sreykaa & Ratana</span>
          <Heart className="h-5 w-5 text-rose-500 animate-pulse" />
        </div>
        <p className="text-gray-600 text-sm">February 24th, 2030 • Phnom Penh, Cambodia</p>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-20px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.7; }
        }
        .animate-float { animation: float infinite ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 1s forwards; }
        .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
        .animate-fadeIn.delay-400 { animation-delay: 0.4s; }
        .animate-fadeIn.delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}
