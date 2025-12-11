import PrivacyPolicy from '@/components/PrivacyPolicy'
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer'

export const page = () => {
  return (
    <div>
        <Header />
        <PrivacyPolicy />
        <Footer />
    </div>
  )
}

export default page;