import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { MapPin, Phone, Clock } from 'lucide-react';

const About = () => (

<>

<Navbar />

<main className="container mx-auto px-4 py-16 max-w-4xl">

<h1 className="font-heading text-4xl font-bold mb-6">About Balaji Collections</h1>


<div className="space-y-6 text-muted-foreground leading-relaxed">

<p>

ABOUT ELEGANCE OF STORE

</p>

<p>

DESCRIBE ELEGANCE OF STORE

</p>

</div>


{/* Info cards */}

<div className="grid sm:grid-cols-3 gap-6 mt-12">

<div className="bg-card border rounded-lg p-6 text-center">

<MapPin className="w-8 h-8 text-primary mx-auto mb-3" />

<h3 className="font-heading font-semibold mb-1">Address</h3>

<p className="text-sm text-muted-foreground">123 Market Street, City, India</p>

</div>

<div className="bg-card border rounded-lg p-6 text-center">

<Phone className="w-8 h-8 text-primary mx-auto mb-3" />

<h3 className="font-heading font-semibold mb-1">Phone</h3>

<p className="text-sm text-muted-foreground">+91 9342825453</p>

</div>
</div>
<div className="bg-card border rounded-lg p-6 text-center">

<Clock className="w-8 h-8 text-primary mx-auto mb-3" />

<h3 className="font-heading font-semibold mb-1">Hours</h3>

<p className="text-sm text-muted-foreground">Mon–Sat: 10 AM – 9 PM

Sun: 10AM -2 PM
</p>

</div>

{/* Google Maps */}

<div className="mt-12 rounded-lg overflow-hidden border">

<iframe

title="Store location"

src="https://maps.app.goo.gl/qV1LR3Lt3sgH1ARbA"

className="w-full h-80"

allowFullScreen

loading="lazy"

referrerPolicy="no-referrer-when-downgrade"

/>

</div>

</main>

<Footer />


</>

);

export default About;


