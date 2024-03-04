import React from 'react'
import MenuButton from '@/components/MenuButton'
import MobileSideBar from '@/components/MobileSidebar'

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <div>
      <MenuButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <MobileSideBar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  )
}

export default MobileMenu