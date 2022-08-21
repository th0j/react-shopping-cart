import { Footer as FlowbiteFooter } from 'flowbite-react'
import reactLogo from '../../assets/react.svg'

const Footer = () => {
  return (
    <FlowbiteFooter container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Brand href="/" src={reactLogo} alt="React Logo" name="React" />
          <FlowbiteFooter.LinkGroup>
            <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Contact</FlowbiteFooter.Link>
          </FlowbiteFooter.LinkGroup>
        </div>
        {/* <FlowbiteFooter.Divider />
        <FlowbiteFooter.Copyright href="#" by="React" year={2022} /> */}
      </div>
    </FlowbiteFooter>
  )
}

export default Footer
