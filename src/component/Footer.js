import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"


const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>
const youtubeIcon  = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 6 C 12.234375 6 8.90625 6.390625 6.875 6.6875 C 5.195313 6.933594 3.839844 8.199219 3.53125 9.875 C 3.269531 11.300781 3 13.386719 3 16 C 3 18.613281 3.269531 20.699219 3.53125 22.125 C 3.839844 23.800781 5.195313 25.070313 6.875 25.3125 C 8.914063 25.609375 12.253906 26 16 26 C 19.746094 26 23.085938 25.609375 25.125 25.3125 C 26.804688 25.070313 28.160156 23.800781 28.46875 22.125 C 28.730469 20.695313 29 18.605469 29 16 C 29 13.394531 28.734375 11.304688 28.46875 9.875 C 28.160156 8.199219 26.804688 6.933594 25.125 6.6875 C 23.09375 6.390625 19.765625 6 16 6 Z M 16 8 C 19.632813 8 22.878906 8.371094 24.84375 8.65625 C 25.6875 8.78125 26.347656 9.417969 26.5 10.25 C 26.742188 11.570313 27 13.527344 27 16 C 27 18.46875 26.742188 20.429688 26.5 21.75 C 26.347656 22.582031 25.691406 23.222656 24.84375 23.34375 C 22.871094 23.628906 19.609375 24 16 24 C 12.390625 24 9.125 23.628906 7.15625 23.34375 C 6.3125 23.222656 5.652344 22.582031 5.5 21.75 C 5.257813 20.429688 5 18.476563 5 16 C 5 13.519531 5.257813 11.570313 5.5 10.25 C 5.652344 9.417969 6.308594 8.78125 7.15625 8.65625 C 9.117188 8.371094 12.367188 8 16 8 Z M 13 10.28125 L 13 21.71875 L 14.5 20.875 L 21.5 16.875 L 23 16 L 21.5 15.125 L 14.5 11.125 Z M 15 13.71875 L 18.96875 16 L 15 18.28125 Z"/></svg>
const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z"/></g></svg>
const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z"/></g></svg>
const facebookIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>
const instagramIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg>

const Footer = ({footer}) => {
    return (
        <>
        <div className="PreFooter">
            <div>
                {repeatIcon}
                <p ><b>Hassle-free replacement</b><br/>10-day easy replacement policy on mi.com</p>
            </div>

            <div>
                {shieldIcon}
                <p ><b>100% secure payment</b><br/>We support Cards, Wallets, EMI and COD</p>
            </div>
            <div>
                {mapIcon}
                <p ><b>Vast service network</b><br/>1000 mi service-centers across 600 cities</p>
            </div>
            
        </div>
        <div className="PreFooter2">
            <div><p>Lets Stay In Touch</p><span>Get Updates on sales specials and more</span></div>
            <div>
                <div>   
                    <input type="email" name="email" placeholer="Enter email Address"/>
                    <button> .</button>
                </div>
                <span>Thanks. You're on our email List for special Offer.</span>
            </div>

            <div>   
                <p>Follow MI</p>
                <span>We want to hear from you!</span>
            </div>


            <div>
                {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}
            </div>

            </div>

            <div className="Footer">
                <div>
                    <p>Support</p>
                    {footer.support.map((item,index)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                    </div>
                    <div>
                          <p>Shop And Learn</p>
                          {footer.shopAndLearn.map((item,index)=>(
                        <a key={item.url} href={item.url}> {item.name}</a>
                    ))} 


                    </div>
                    <div>
                          <p>Retail Store</p>

                          {footer.retailStore.map((item,index)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}


                    </div>


                    <div>
                          <p>Contact Us</p>
                          {footer.contactUs.map((item,index)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}


                    </div>

                    <div>
                          <div>Chat with our Virtual Bot(24/7 Live Support)</div> <button>CHAT NOW</button>
                         
                          


                    </div>
            </div>
            <div className="FooterBorder">
                <div>Copyright @ 2010-2021 Xiaomi. All Right Reserved</div>

            </div>
        </>
    )
}

export default Footer
