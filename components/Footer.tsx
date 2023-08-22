import React from 'react'

const Footer = () => {
  return (
    <div className=" bottom-0 px-20 h-full bg-gradient-to-br from-yellow-600 to-secondary text-white w-screen flex flex-col justify-between p-10 -z10">
  {/* Övre delen av footern */}
  <div className="flex-1">
    <h1 className="text-6xl py-30 font-bold mb-10">Lyckas Online</h1>
    <div className="grid grid-cols-2 justify-center items-center gap-8">
      <ul>
        <h4 className="text-2xl font-bold mb-4">Tjänster</h4>
        <li className="mb-4 hover:underline"><a href="/seo">SEO</a></li>
        <li className="mb-4 hover:underline"><a href="/webbutveckling">Webbutveckling</a></li>
        <li className="mb-4 hover:underline"><a href="/marknadsföring">Marknadsföring</a></li>
      </ul>
      <ul>
        <h4 className="text-2xl font-bold mb-4">Länkar</h4>
        <li className="mb-4 hover:underline"><a href="#">Länk 4</a></li>
        <li className="mb-4 hover:underline"><a href="#">Länk 5</a></li>
        <li className="mb-4 hover:underline"><a href="#">Länk 6</a></li>
      </ul>
    </div>
  </div>

  {/* Nedre delen av footern */}
  <div className="flex justify-between items-center">
    <p>&copy; {new Date().getFullYear()} Nordeeq</p>

  </div>
</div>



  )
}

export default Footer
