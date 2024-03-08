import { useState } from "react";

function DesktopNavigation() {
    
}

function MobileNavigation() {
    return (<>
    </>)
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" bg-slate-800 sticky top-0">
      <div className="flex justify-between py-3 max-w-screen-2xl mx-auto px-2 lg:px-0">
        <div>
          <h3 className="text-white">DevCraft</h3>
        </div>
        <button className=" static lg:hidden">Burger</button>
        <nav className="text-white">
          <ul className="flex gap-x-2">
            <li>courses</li>
            <li>courses</li>
            <li>courses</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
