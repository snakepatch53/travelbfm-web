import PageContent from "../component/PageContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { getProductsWithCategory } from "../services/products";
import { ShopCartContext } from "../context/shop-cart";
import { showNotification } from "../component/Notification";
import { getCategories } from "../services/categories";
import { cls } from "../utils/utils";
import CrudBackground from "../panel.components/CrudBackground";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [productFilter, setProductFilter] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categorySelected, setCategorySelected] = useState(0);
    useEffect(() => {
        getProductsWithCategory().then((data) => setProducts(data));
        getCategories().then((data) => setCategories(data));
    }, []);

    useEffect(() => {
        if (categorySelected == 0) {
            setProductFilter(products);
        } else {
            setProductFilter(products.filter((item) => item.category_id == categorySelected));
        }
    }, [categorySelected, products]);
    const handleSearch = (e) => {
        const value = e.target.value;
        if (value == "") {
            setProductFilter(products);
        } else {
            setProductFilter(
                products.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            );
        }
    };
    return (
        <PageContent className="relative flex flex-col w-full">
            <CrudBackground src="/image/drink1.jpg" />
            <div
                className="sticky top-0 z-20 flex w-full bg-white mb-5 sm:mb-10 rounded-md overflow-hidden shadow-xl border-[6px] border-solid border-[--c4-bg]"
                style={{
                    boxShadow: "0px 1px 10px 1px rgba(0,0,0,0.8)",
                }}
            >
                <span className="flex h-full items-center px-3 font-content bg-[--c4-bg] text-[--c4-txt]">
                    Buscar:
                </span>
                <input
                    type="text"
                    className="w-full p-2"
                    placeholder="Escribe el nombre del producto"
                    onChange={handleSearch}
                />
                <div className="h-full aspect-square flex justify-center items-center pr-2">
                    <FontAwesomeIcon icon={faSearch} className="text-lg text-[--c4-bg]" />
                </div>
            </div>
            <div className="relative z-10 flex flex-1  gap-5 lg:gap-10 ">
                <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 lg:gap-10 ">
                    {productFilter.map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                </div>
                <div className="scroll-style sticky z-10 top-20 flex-1 max-w-48 max-h-[calc(100vh-170px)] overflow-y-auto pr-1 bg-white rounded-md">
                    <div className="flex flex-col w-full gap-1">
                        <div className="sticky top-0 z-10 flex justify-center items-center h-10 bg-white">
                            <h2 className="font-link font-bold text-center text-xl tracking-widest">
                                Categorias
                            </h2>
                        </div>
                        <Button
                            name="Todos"
                            icon=""
                            id="0"
                            selected={categorySelected}
                            onClick={() => setCategorySelected(0)}
                        />
                        {categories.map((item) => (
                            <Button
                                key={item.id}
                                {...item}
                                selected={categorySelected}
                                onClick={() => setCategorySelected(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PageContent>
    );
}

function Item({ ...product }) {
    const { addProduct } = useContext(ShopCartContext);
    const handleAddProduct = (product) => {
        return () => {
            addProduct(product);
            showNotification({
                title: "Exito",
                message: "Producto agregado al carrito",
                type: "success",
            });
        };
    };
    return (
        <div className="flex flex-col items-center  w-full bg-white rounded-md shadow-xl overflow-hidden mb-auto">
            <div className="group/photo w-full aspect-video overflow-hidden rounded-sm shadow-lg">
                <img
                    src={product.photo_url}
                    // src="/image/food1.jpg"
                    className="flex w-full h-full object-cover object-center group-hover/photo:scale-110 transition-all duration-200"
                />
            </div>
            <div className="flex-1 flex flex-col w-full pb-3 px-2">
                <div className="flex flex-col w-full">
                    <h3 className="block text-nowrap text-ellipsis overflow-hidden font-link text-lg text-center mt-2">
                        {product.name}
                    </h3>
                    {/* <span>{product.}</span> */}
                    <p className="font-content text-sm text-center opacity-80 overflow-auto text-pretty">
                        {product.description}
                    </p>
                </div>
                <div className="flex flex-row items-center w-full gap-5 justify-between">
                    <h3 className="font-bold text-lg ml-2 my-1">${product.price}</h3>
                </div>
                <button
                    className="flex gap-1 justify-center items-center w-full py-2 px-3 mt-auto opacity-85 hover:opacity-100 rounded-md transition-all duration-300 bg-blue-500 text-white"
                    onClick={handleAddProduct(product)}
                >
                    <span>Agregar al Carrito</span>
                    <FontAwesomeIcon icon={faCartPlus} className="text-base" />
                </button>
            </div>
        </div>
    );
}

function Button({ selected, onClick, ...category }) {
    return (
        <button
            onClick={onClick}
            className={cls(
                "group/button relative flex items-center justify-between py-2 px-4 hover:bg-gray-300 font-link",
                {
                    "bg-gray-300": selected == category.id,
                }
            )}
        >
            <div
                className={cls(
                    "absolute left-0 top-1/5 -translate-y-1/5 w-[3px] h-0 group-hover/button:h-full bg-[--c6-bg] transition-all duration-300",
                    {
                        "h-full": selected == category.id,
                    }
                )}
            />
            <span className="block text-nowrap text-ellipsis overflow-hidden font-link text-left text-[--c4-bg]">
                {category.name}
            </span>
            <div
                dangerouslySetInnerHTML={{ __html: category.icon }}
                className="w-4 min-w-4 fill-[--c4-bg] ml-1"
            />
        </button>
    );
}
