let next = "#next-btn";
let prev = "#prev-btn";
let social_btn = ".social-btn";
let s_btn1 = "#s-btn1";
let s_btn2 = "#s-btn2";
let s_btn3 = "#s-btn3";
let s_btn4 = "#s-btn4";
let camera_btn = "#camera-btn"
let image_taken = false;
let menu_btns = ".menu-icon";
let menu_btn = ".menu-btn";
let open_menu = ".menu-icons";
let hide_menu = ".hide-menu";
let logout_btn = "#logout";
let settings_btn = ".settings-btn";
let settings_page = "#settings-overlay";
let close_settings = "#settings-overlay #prev-btn";
let notification_btn = ".notifications-btn"
let notification_overlay = "#notifications-overlay"
let filters_btn = ".filters-btn";
let filters_page = "#filters-overlay";
let exit_btn = ".exit-btn";

//& navigate to login page

//I am aware that I could have done all the navigation parts the one below, with less code and much simpler
//but my brain refused to work, and since this project
//was already late I decided to leave it as is
function goTologin(){
    window.location.href = '../signupLogin/index.html';
}
function  goToSignUp1(){
    window.location.href = '../signupLogin/signup-1.html';
}
function logout(){
            window.location.href = '../signupLogin/index.html';

}

function goToHome(){
    $("#login-btn").click(function(){
        window.location.href = '../profile/home-page.html';
    })
}



//& signup1 page
//have orevious button retunr to login page and have next button go to signup 2
function signup1_to_login(){
    $(prev).click(function(){
        window.location.href = '../signupLogin/index.html';
    })
}
function signup1_to_signup2(){
    $(next).click(function(){
        window.location.href = '../signupLogin/signup-2.html';
    })
}
//&signup2 page
//have orevious button retunr to signup2 page and have next button go to signup 3
function signup2_to_signup1(){
    $(prev).click(function(){
        window.location.href = '../signupLogin/signup-1.html';
    })
}
function signup2_to_signup3(){
    $(next).click(function(){
        window.location.href = '../signupLogin/signup-3.html';
    })
}
//&signup3 page
//have orevious button retunr to signup2 page and have next button go to signup 3
function signup3_to_signup2(){
    $(prev).click(function(){
        window.location.href = '../signupLogin/signup-2.html';
    })
}
function signup3_to_signup4(){
    $(next).click(function(){
        window.location.href = '../signupLogin/signup-4.html';
    })
}

//alert: thank user for linking social media
function clickSocialBtn1() {
    $(s_btn1).click(function () {
        $(s_btn1).css("background-color", "#F0BC1B");
        alert("Thank you for linking your Instagram")
    })
}
function clickSocialBtn2(){
    $(s_btn2).click(function () {
        $(s_btn2).css("background-color", "#F18D21");
        alert("Thank you for linking your Facebook")
    })
}
function clickSocialBtn3(){
    $(s_btn3).click(function () {
        $(s_btn3).css("background-color", "#A51E24");
        $(s_btn3).css("color", "white");
        alert("Thank you for linking your LinkedIn")
    })
}
function clickSocialBtn4(){
    $(s_btn4).click(function () {
        $(s_btn4).css("background-color", "#183059");
        $(s_btn4).css("color", "white");
        alert("Thank you for linking your Facebook")
    })
}


//&signup4 page
//have orevious button retunr to signup2 page and have next button go to signup 3
function signup4_to_signup3(){
    $(prev).click(function(){
        window.location.href = '../signupLogin/signup-3.html';
    })
}
function signup3_to_IDVerification1(){
    $(next).click(function(){
        window.location.href = '../IDVerification/ID-verification-1.html';
    })
}


//&IDverification
//
//
//&...............................
function IDVerification1_to_IDVerification2(){
    $(next).click(function(){
        window.location.href = '../IDVerification/ID-verification-2.html';
    })
}

//&IDverificaiton2
function IDVerification2_to_IDVerification1(){
    $(prev).click(function(){
        window.location.href = '../IDVerification/ID-verification-1.html';
    })
}
function capture_img(){
    $(camera_btn).click(function () {
        image_taken = true
        alert("Images was taken successfully!")
    })
}
function IDVerification2_to_IDVerification3(){
    $(next).click(function(){
        if (image_taken == true) {
            window.location.href = '../IDVerification/ID-verification-3.html';
        }
        else {
            alert("Please take a picture for verification")
        }
    })
}

//&IDverificaiton3
function IDVerification3_to_IDVerification4(){
    $(next).click(function(){
        window.location.href = '../IDVerification/ID-verification-4.html';
    })
}



//&IDverificaiton4

function IDVerification4_to_IDVerification3(){
    $(prev).click(function(){
        window.location.href = '../IDVerification/ID-verification-3.html';
    })
}
function capture_img(){
    $(camera_btn).click(function () {
        image_taken = true
        alert("Images was taken successfully!")
    })
}
function IDVerification4_to_IDVerification5(){
    $(next).click(function(){
        if (image_taken == true) {
            window.location.href = '../IDVerification/ID-verification-5.html';
        }
        else {
            alert("Please take a picture for verification")
        }
    })
}

//&SETUP PROFILE
function goTo_setup_profile(){
    $(next).click(function(){
        window.location.href = '../profile/setup-profile.html';
    })
}

function goToHome_after_setup(){
    $(next).click(function(){
        window.location.href = '../profile/home-page.html';
    })
}



//&home page
function menu_btns_click(){
    $(menu_btns).click(function(){
        alert("Oops! It seems we are having problems. Please come back later")
    })
}

function click_hovering_menu(){
    $(menu_btn).click(function(){
        $(hide_menu).toggle()
    })
}
function click_settings(){
    $(settings_btn).click(function(){
        $(settings_page).show()
    })
}
function close_settings_overlay() {
    $(close_settings).click(function(){
        $(settings_page).hide()
    })
}
function open_notification() {
    $(notification_btn).click(function(){
        $(notification_overlay).toggle()
    })
}
function open_filters_page() {
    $(filters_btn).click(
        () => {
            $(filters_page).toggle();
        }
    )
}
function close_filters_page() {
    $(exit_btn).click(
        () => {
            $(filters_page).hide();
        }
    )
}
 

//&alert
function alert_out_of_order()