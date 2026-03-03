import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/shadcn-studio/blocks/footer-component-01/footer-component-01'
import Header from './components/shadcn-studio/blocks/hero-section-41/header'
import HeroSection from './components/shadcn-studio/blocks/hero-section-41/hero-section-41'
import Login from './components/shadcn-studio/blocks/login-page-01/login-page-01'
import HeroSection1 from './components/shadcn-studio/blocks/hero-section-01/hero-section-01'
import ChangelogContent from './components/shadcn-studio/blocks/timeline-component-05/timeline-component-05'
import V1_3_0_Content from './components/shadcn-studio/blocks/timeline-component-05/content/v1_3_0'
import V1_2_0_Content from './components/shadcn-studio/blocks/timeline-component-05/content/v1_2_0'
import V1_1_0_Content from './components/shadcn-studio/blocks/timeline-component-05/content/v1_1_0'
import ProductScreen from './views/product'


const navigationData = [
  {
    title: 'Testimonials',
    href: '#'
  },
  {
    title: 'Menu',
    href: '/product'
  },
  {
    title: 'timeline',
    href: '/changelog'
  }
]

const menudata = [
  {
    id: 1,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-18.png',
    imgAlt: 'plate-1',
    userComment: 'The ambiance is perfect and the food is absolutely delicious. Highly recommended!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-56.png'
  },
  {
    id: 2,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-19.png',
    imgAlt: 'plate-2',
    userComment: 'Best dining experience in town. The staff is friendly and the menu is exceptional.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-46.png'
  },
  {
    id: 3,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-20.png',
    imgAlt: 'plate-3',
    userComment: 'Every dish is crafted with care. This place never disappoints!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png'
  },
  {
    id: 4,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-05.png',
    imgAlt: 'plate-4',
    userComment: 'Great atmosphere and incredible flavors. A must-visit restaurant!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-58.png'
  },
  {
    id: 5,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-20.png',
    imgAlt: 'plate-3',
    userComment: 'Every dish is crafted with care. This place never disappoints!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png'
  }
]

const releases = [
  {
    version: 'v 1.3.0',
    date: 'November 7, 2025',
    content: <V1_3_0_Content />
  },
  {
    version: 'v 1.2.0',
    date: 'March 22, 2025',
    content: <V1_2_0_Content />
  },
  {
    version: 'v 1.1.0',
    date: 'January 15, 2025',
    content: <V1_1_0_Content />
  }
]


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header navigationData={navigationData} />
        <main className='min-h-screen'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <HeroSection navigationData={navigationData} menudata={menudata} />
                  <HeroSection1 />
                  {/* <ChangelogContent releases={releases} /> */}
                </>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/changelog' element={<ChangelogContent releases={releases} />} />
            <Route path='/product' element={<ProductScreen />} />
          </Routes>
        </main>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App