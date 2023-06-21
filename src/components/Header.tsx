const Header = () => {
    const menus=[
        {id:1,title:'HOME'},{id:2,title:"ABOUT"},{id:3,title:"WORK"},{id:4,title:"SKILLS"},{id:2,title:"CONTACT"}
    ]
    return <header className="px-8 py-4 sticky top-0 backdrop-blur-sm">
        <nav className=" flex items-center">
            <div>
                <img src="../src/assets/logo.png" alt="" height="20px" width="90px" />
            </div>
            <ul className="flex items-center justify-center grow shrink">
                {/* <li className="mx-3"><a href="#home" className="font-normal text-sm text-gray-400 relative after:absolute after:w-[5px] after:h-[5px] after:bg-blue-900 after:rounded-full after:left-[50%] after:top-[-9px] after:opacity-0 after:hover:opacity-100 hover:text-blue-900 transition-all">HOME</a></li> */}
                {/* <Menu title="HOME" />
                <Menu title="ABOUT" />
                <Menu title="WORK" />
                <Menu title="SKILLS" />
                <Menu title="CONTACT" /> */}
                {menus.map((menu)=>{
                    return <Menu title={menu.title}/>
                })}
                
            </ul>
        </nav>
    </header>
}
const Menu=({title}:{title:string;})=>{
    const link=title.toLocaleLowerCase();
    return <li className="mx-3"><a href={`#${link}`} className="font-normal text-sm text-gray-400 relative after:absolute after:w-[5px] after:h-[5px] after:bg-blue-900 after:rounded-full after:left-[50%] after:top-[-9px] after:opacity-0 after:hover:opacity-100 hover:text-blue-900 transition-all">{title}</a></li>
}

export default Header