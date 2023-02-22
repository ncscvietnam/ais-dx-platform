// import { LogoAISIcon } from '@/assets/svg'
import LogoAISIcon from '../../assets/svg/logoAIS.png'
import Image from "../../components/Image"
 const Dashboard = () => {
  return (
      <div className="grid grid-cols-7">
          <div >
              <div className="relative h-24 w-48 cursor-pointer">
                                <Image
                                    src={LogoAISIcon}
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
              <div>Menu</div>
          </div>
          <div >CONTENT</div>
    </div>
  )
}
export default Dashboard