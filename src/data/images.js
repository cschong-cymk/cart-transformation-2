// Local-niche placeholder imagery via Unsplash.
// Swap these for your own brand/store photos before launch.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroStore:  'assets/ecommerce-dashboard.jpg',
  checkout:   u('photo-1556742502-ec7c0e9f34b1'),           // cards / payment
  founder:    'assets/FlowDaptor-Logo-Favicon.png',
  csChong:    'assets/CS.jpeg', 
  mengWee:    'assets/MW.jpeg',   
  founder2:   'assets/KC.png',
  founder3:   'assets/sa.png',
  workspace:  u('photo-1517245386807-bb43f82c33c4', 1400),  // bright workspace
  meeting:    u('photo-1543269865-cbf427effbad', 1400),     // meeting / strategy
  shop:       u('photo-1556742049-0cfed4f6a45d', 1200),     // shopping bags
}

export default images



