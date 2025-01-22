// import React, { useEffect, useState } from 'react';
// import style from '../../Component.module.css';
// import WomenFashionCard from '../WomenFashionCard/WomenFashionCard';
// import { APIPATH } from '../../../config';
// import { useCart } from '../../Context/Context';

// function NewArrival() {
//     const { isLoading, dress } = useCart()
//     const [state, setState] = useState(1);

//     return <>
//         <div className={style.new_arrival_container}>
//             <div className={style.new_arrival_title_dec}>
//                 <h1 className={style.new_arrival_title}><span className={style.blue_span}>New </span>Arrivals</h1>
//                 <p className={style.new_arrival_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.</p>
//             </div>
//             <div className={style.new_category_list_parent}>
//                 <div className={style.new_category_list}>
//                     <button onClick={() => setState(1)}
//                         className={state === 1 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
//                     >Women’s Fashion</button>
//                     <button onClick={() => setState(2)}
//                         className={state === 2 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
//                     >Blazer</button>
//                     <button onClick={() => setState(3)}
//                         className={state === 3 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
//                     >Popular</button>
//                     <button onClick={() => setState(4)}
//                         className={state === 4 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
//                     >Men Accessories</button>
//                     <button onClick={() => setState(5)}
//                         className={state === 5 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
//                     >Discount Deals</button>
//                 </div>
//             </div>
//         </div>
//         <div className={style.women_card_container_parent}>
//             {isLoading ? <div className={style.loader}></div> :
//                 <>
//                     {state === 1 && <WomenFashionCard cardContent={dress?.slice(0,4)} />}
//                     {state === 2 && <WomenFashionCard cardContent={dress?.slice(0,4)} />}
//                 </>
//             }
//         </div>
//     </>

// }

// export default NewArrival;

import React, { useEffect, useState } from 'react';
import style from '../../Component.module.css';
import WomenFashionCard from '../WomenFashionCard/WomenFashionCard';
import { APIPATH } from '../../../config';
import { useCart } from '../../Context/Context';

function NewArrival() {
    const { isLoading, dress } = useCart();
    const [state, setState] = useState(1);
    const [itemsToShow, setItemsToShow] = useState(4); 

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth < 1200) {
                setItemsToShow(3);
            }
            if(window.innerWidth < 767){
                setItemsToShow(1);
            }
        };
        updateItemsToShow();

        window.addEventListener('resize', updateItemsToShow);

        return () => {
            window.removeEventListener('resize', updateItemsToShow);
        };
    }, []);

    return (
        <>
            <div className={style.new_arrival_container}>
                <div className={style.new_arrival_title_dec}>
                    <h1 className={style.new_arrival_title}>
                        <span className={style.blue_span}>New </span>Arrivals
                    </h1>
                    <p className={style.new_arrival_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
                    </p>
                </div>
                <div className={style.new_category_list_parent}>
                    <div className={style.new_category_list}>
                        <button
                            onClick={() => setState(1)}
                            className={state === 1 ? style.new_category_list_btn_active : style.new_category_list_btn}
                        >
                            Women’s Fashion
                        </button>
                        <button
                            onClick={() => setState(2)}
                            className={state === 2 ? style.new_category_list_btn_active : style.new_category_list_btn}
                        >
                            Blazer
                        </button>
                        <button
                            onClick={() => setState(3)}
                            className={state === 3 ? style.new_category_list_btn_active : style.new_category_list_btn}
                        >
                            Popular
                        </button>
                        <button
                            onClick={() => setState(4)}
                            className={state === 4 ? style.new_category_list_btn_active : style.new_category_list_btn}
                        >
                            Men Accessories
                        </button>
                        <button
                            onClick={() => setState(5)}
                            className={state === 5 ? style.new_category_list_btn_active : style.new_category_list_btn}
                        >
                            Discount Deals
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.women_card_container_parent}>
                {isLoading ? (
                    <div className={style.loader}></div>
                ) : (
                    <>
                        {state === 1 && <WomenFashionCard cardContent={dress?.slice(0, itemsToShow)} />}
                        {state === 2 && <WomenFashionCard cardContent={dress?.slice(0, itemsToShow)} />}
                    </>
                )}
            </div>
        </>
    );
}

export default NewArrival;
