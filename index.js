#section * {
    margin: 0;
    box-sizing: border-box;
}
.oval-row {
    display: flex;
    flex-wrap: wrap;
}
.w50 {
    flex: 0 0 50%;
}
#section {
    overflow: hidden;
    margin: 20px 0;
}
#section .oval-row {
    flex-direction: row-reverse;
}
#section .bannerImage {
    background: url("bg.jpg");
    background-size: cover;
    background-position: center center;
    background-color: #337AB7;
}
#section .bannerText {
    background-color: #337AB7;
    position: relative;
    z-index: 1;
    padding: 120px 40px;;
}
#section .bannerText .oval {
    position: absolute;
    background-color: #337AB7;
    top: -50%;
    right: 0;
    box-shadow: 20px 8px 16px rgba(0,0,0,0.2);
    border-radius: 50%;
    z-index: -1;
    content: '';
}
#section .bannerText h2 {
    font-size: 48px;
    line-height: 48px;
    color: #FFF;
}
#section .bannerText p {
    font-size: 26px;
    line-height: 30px;
    color: #FFF;
}
@media screen and (max-width: 767px) {
    #section .oval-row {
        display: block;
    }
    #section .bannerText {
        padding: 0 40px 60px 40px;
    }
}
