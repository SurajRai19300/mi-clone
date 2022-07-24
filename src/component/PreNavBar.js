// import React from 'react'
// import "../styles/PreNavbar.css"


// function PreNavbar() {
//     return (
//         <div className="preNav">

//             <div>
//                 <a href="https://www.mi.com/np/">MI Nepal</a><span></span>
//                 <a href="https://www.mi.com/np/">Get MI Store</a> <span></span>
//                 <a href="https://www.mi.com/np/">Online Help</a> <span></span>
//                 <a href="https://www.mi.com/np/">Retail Store</a> <span></span>
//             </div>


//             <div>
//                 <a href="https://account.xiaomi.com/fe/service/login/password?_locale=np_NP&checkSafePhone=false&sid=mi_overseanp&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fbuy.mi.com%25252Fnp%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fnp%2525252F%252526sign%25253DY2M1ZGI4YzE2YWQ3NWMxZDlkYThiMWI0MGIyNDQ4ZGY2Y2RlMGQwZQ%25252C%25252C%2526sid%253Dmi_overseanp%2526_locale%253Dnp_NP%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fbuy.mi.com%2Fnp%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fnp%252F%26sign%3DY2M1ZGI4YzE2YWQ3NWMxZDlkYThiMWI0MGIyNDQ4ZGY2Y2RlMGQwZQ%2C%2C&_sign=LQoC9STFQ7%2FbS%2BC5%2BUl%2BnelupTw%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a>
//                 <a href="https://account.xiaomi.com/fe/service/register/email?_locale=np_NP&checkSafePhone=false&sid=mi_overseanp&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fbuy.mi.com%25252Fnp%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fnp%2525252F%252526sign%25253DY2M1ZGI4YzE2YWQ3NWMxZDlkYThiMWI0MGIyNDQ4ZGY2Y2RlMGQwZQ%25252C%25252C%2526sid%253Dmi_overseanp%2526_locale%253Dnp_NP%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fbuy.mi.com%2Fnp%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fnp%252F%26sign%3DY2M1ZGI4YzE2YWQ3NWMxZDlkYThiMWI0MGIyNDQ4ZGY2Y2RlMGQwZQ%2C%2C&_sign=LQoC9STFQ7%2FbS%2BC5%2BUl%2BnelupTw%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=NP">SIGN UP</a>
            
//                 <a href="https://xiaominepal.com.np/product/cart">CART</a>
//             </div>


//         </div>
//     )
// }

// export default PreNavbar





import React from 'react'
import "../styles/PreNavbar.css"



const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
const PreNavBar = () => {
    return (

        <div className="preNav">

                    <div>
                        <a href="https://www.mi.com/np/">MI Nepal</a><span>|</span>
                        <a href="https://www.mi.com/np/">Get MI Store</a> <span>|</span>
                        <a href="https://www.mi.com/np/">Online Help</a> <span>|</span>
                        <a href="https://www.mi.com/np/">Retail Store</a> <span>|</span>
                    </div>
        
        
                 <div>
                     <a href="https://account.xiaomi.com/fe/service/login/password?_locale=np_NP&checkSafePhone=false&sid=mi_overseanp&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fbuy.mi.com%25252Fnp%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fnp%2525252F%252526sign%25253DY2M1ZGI4YzE2YWQ3NWMxZDlkYThiMWI0MGIyNDQ4ZGY2Y2RlMGQwZQ%25252C%25252C%2526sid%253Dmi_overseanp%2526_locale%253Dnp_NP%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fbuy.mi.com%2Fnp%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fnp%252F%26sign%3DY2M1ZGI4YzE2YWQ3NWMxZDlkYThiMWI0MGIyNDQ4ZGY2Y2RlMGQwZQ%2C%2C&_sign=LQoC9STFQ7%2FbS%2BC5%2BUl%2BnelupTw%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a><span>|</span>
                     <a href="https://account.xiaomi.com/fe/service/register/email?_locale=np_NP&checkSafePhone=false&sid=mi_overseanp&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fbuy.mi.com%25252Fnp%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fnp%2525252F%252526sign%25253DY2M1ZGI4YzE2YWQ3NWMxZDlkYThiMWI0MGIyNDQ4ZGY2Y2RlMGQwZQ%25252C%25252C%2526sid%253Dmi_overseanp%2526_locale%253Dnp_NP%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fbuy.mi.com%2Fnp%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fnp%252F%26sign%3DY2M1ZGI4YzE2YWQ3NWMxZDlkYThiMWI0MGIyNDQ4ZGY2Y2RlMGQwZQ%2C%2C&_sign=LQoC9STFQ7%2FbS%2BC5%2BUl%2BnelupTw%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=&_uRegion=NP">SIGN UP</a><span>|</span>
                    
                     <a href="https://xiaominepal.com.np/product/cart"> {cartIcon}CART (0)</a>
                 </div>
        
        
             </div>
    )
}

export default PreNavBar


