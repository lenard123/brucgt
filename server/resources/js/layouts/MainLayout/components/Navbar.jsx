import { MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white p-2 px-4 shadow sticky top-0 z-10 min-h-[4rem] flex items-center">
            <div className="container m-auto max-w-screen-xl">
                <div className="flex items-center justify-start md:justify-between gap-4">

                    <a className="xl:hidden"><MenuOutlined /></a>

                    <a className="flex flex-col flex-grow xl:flex-grow-0 flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <img className="h-6 w-6" src="/logo.png" />
                            <span className="text-2xl font-bold">BRUCGT</span>
                        </div>
                        <span className="hidden md:block text-primary font-semibold">BRU Consumer Goods Trading</span>
                    </a>
                    <div className="hidden xl:flex justify-center text-lg  font-light gap-4">
                        <Link to='/'>Home</Link>
                        <Dropdown 
                            placement='bottom' 
                            overlay={<Menu items={[
                                {label: 'T Shirt', key: 1},
                                {label: 'Polo Shirt', key: 2},
                                {label: 'Wet Shirt', key: 3},
                                {label: 'Clothing', key: 4},
                                {label: 'Bag', key: 5},
                            ]}/>}>
                            <a>Categories</a>
                        </Dropdown>
                        <Link to="/shop">Shop</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact Us</Link>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <Input.Search
                            className="rounded-lg"
                            placeholder="Search Products"
                            onSearch={() => { }}
                            enterButton
                            size="large"
                        />

                        <div className="flex flex-shrink-0 gap-2 items-center">
                            <Button icon={<ShoppingCartOutlined />} shape='circle' size='large' />
                            <div className="flex flex-col text-xs">
                                <span className="font-semibold">My Cart</span>
                                <span>0 items - 0.00PHP</span>
                            </div>
                        </div>

                    </div>

                    <div className="flex md:hidden text-xl gap-4 text-slate-700">
                        <a><SearchOutlined /></a>
                        <a><ShoppingCartOutlined /></a>
                    </div>
                </div>

            </div>
        </nav>
    )
}