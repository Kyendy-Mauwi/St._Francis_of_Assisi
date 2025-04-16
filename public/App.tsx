import React from 'react';
import { Church, Users, Calendar, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ActivitySection({ title, images, description }: { title: string; images: string[]; description: string }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="outline-none">
                  <img
                    src={image}
                    alt={`${title} activity ${index + 1}`}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
            {/* <button className="text-secondary font-semibold flex items-center hover:text-secondary-600">
              View More Photos <ArrowRight className="h-4 w-4 ml-2" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const activities = [
    {
      title: "Easter Skit",
      images: [
        "/images/ES01.jpg",
        "/images/ES02.jpg",
        "/images/ES04.jpg",
        "/images/ES03.jpg"
      ],
      description: "In 2023, St. Francis Youth (SFY) brought the joy and meaning of Easter to life through a heartfelt and inspiring skit performance. Our Easter skit portrayed the timeless message of love and sacrifice, resonating with our community and audience.Through this creative expression, we shared the significance of Easter, reminding ourselves of the hope and redemption it represents. It was a powerful moment of reflection and celebration, showcasing our commitment to spreading positivity and faith. At SFY, every occasion becomes an opportunity to connect, inspire, and uplift. Our Easter skit was more than just a performance—it was a testament to our unity and shared values."
    },
    {
      title: "Retreat",
      images: [
        "/images/Ret01.jpg",
        "/images/Ret02.jpg",
        "/images/Ret03.jpg",
        "/images/Ret04.jpg"
      ],
      description: "Our trip to The Forest Kereita was a perfect blend of adventure and camaraderie. Surrounded by nature's beauty, we explored trails, conquered obstacles, and shared laughter around the campfire. This journey strengthened our bonds and created cherished memories. Here's to more adventures with our St. Francis Youth (SFY) family!"
    },
    {
      title: "Acts of Mercy",
      images: [
        "/images/ca01.jpg",
        "/images/ca02.jpg",
        "/images/ca03.jpg"
      ],
      description: "During our 'Acts of Mercy' charity event, the St. Francis Youth (SFY) community came together to make a meaningful impact by providing food for our friends in need. With hearts full of compassion and a desire to serve, we pooled our resources to purchase essential food items for our friends who may be facing challenges. Together, we demonstrated the power of collective action and generosity, showing that even a small act of kindness can make a significant difference in the lives of our friends. The joy of giving and sharing nourishment with others was truly humbling and inspiring for all involved."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/images/logo.jpg" alt="SFY Logo" className="h-8 w-8"/>
              <span className="text-xl font-bold">St. Francis Youth</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary-100">About</a>
              <a href="#community" className="hover:text-primary-100">Community</a>
              <a href="#events" className="hover:text-primary-100">Events</a>              
              <a href="#contact" className="hover:text-primary-100">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/images/Landing.jpg"
          alt="Youth group gathering"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to St. Francis Youth</h1>
            <p className="text-xl mb-8">Our Safe Space.</p>
            <a href="https://chat.whatsapp.com/KRVXVYviMwyHiB6Z0mvcnw">
  <button className="bg-primary-900 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">
    Join Us
  </button>
</a>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="about" className="text-4xl font-bold text-secondary mb-6">Welcome to St. Francis Youth (SFY)</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2023, St. Francis Youth (SFY) is a dynamic community where positivity thrives and friendships flourish. 
                Our mission is simple: to create a safe and supportive space where every member is valued and empowered.
              </p>
              <p>
                At SFY, we embrace optimism and celebrate diversity. Whether we're exploring new adventures, engaging in meaningful conversations, 
                or simply sharing laughter, each moment is filled with positivity and possibility.
              </p>
              <p>
                Join us as we uplift spirits, inspire growth, and make lasting memories together. Discover the joy of belonging to a 
                community that believes in the power of positivity and the strength of unity.
              </p>
              <p className="text-xl font-semibold text-primary">
                Welcome to St. Francis Youth—where positivity is our language and kindness is our culture!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="community" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-6">Our Community</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Group</h3>
              <p className="text-gray-600">Join us for a meaningful time of connection, where we catch up, check on each other, and help each other growth in Faith.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Retreats</h3>
              <p className="text-gray-600">Our annual retreat filled with hiking, cookouts, swimming, and unforgettable moments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Acts of Mercy</h3>
              <p className="text-gray-600">Opportunities to serve our community and make a difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Sections */}
      {activities.map((activity, index) => (
        <ActivitySection key={index} {...activity} />
      ))}

      {/* Upcoming Events */}
      <section id="events" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Things We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regular Meetings",
                date: "Monthly",
                description: "Join us for a meaningful time of connection, where we catch up, check on each other, and reflect on scripture together.",
              },
              {
                title: "Annual Retreat",
                date: "Annually",
                description: "Our annual retreat filled with hiking, cookouts, swimming, and unforgettable moments of fellowship and worship."
              },
              {
                title: "Community Service",
                date: "June 5",
                description: "Serving our local community through various projects."
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-primary mb-4">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="text-secondary font-semibold flex items-center hover:text-secondary-600">
                  <a href="https://chat.whatsapp.com/KRVXVYviMwyHiB6Z0mvcnw">Join Us To Learn More</a> <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8">Have questions? We'd love to hear from you!</p>
          <div className="max-w-md mx-auto">
            <button className="bg-white text-secondary px-8 py-3 rounded-full hover:bg-secondary-50 transition">
              <a href="https://chat.whatsapp.com/KRVXVYviMwyHiB6Z0mvcnw">Join Our Group</a>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/images/logo.jpg" alt="SFY Logo" className='h-8 w-8'/>
              <span className="font-bold">St. Francis Youth</span>
            </div>
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} St. Francis Youth. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
