import SharingImage from '../assets/image/sharing.jpg';

const shareUrl = 'https://promo.sber.ru/kidssafety';
const shareTitle = 'Основы кибербезопасности для родителей и детей'
const shareDescription = 'Специальный проект ко Дню защиты детей. Важная и практичная информация для родителей, которая поможет уберечь детей от основных киберугроз, сделать это тактично, без нарушения личного пространства, конфликтов и запретов.';

const Share = {
    vkontakte: function() {
        let url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(shareUrl);
        url += '&title='       + encodeURIComponent(shareTitle);
        url += '&description=' + encodeURIComponent(shareDescription);
        url += '&image='       + encodeURIComponent(SharingImage);
        url += '&noparse=true';
        Share.popup(url);
    },
    odnoklassniki: function() {
        let url  = 'https://connect.ok.ru/offer?';
        url += 'url='   + encodeURIComponent(shareUrl);
        url += '&title=' + encodeURIComponent(shareDescription);
        url += '&imageUrl=' + encodeURIComponent(SharingImage);
        Share.popup(url);
    },
    facebook: function() {
        let url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(shareTitle);
        url += '&p[summary]='   + encodeURIComponent(shareDescription);
        url += '&p[url]='       + encodeURIComponent(shareUrl);
        url += '&p[images][0]=' + encodeURIComponent(SharingImage);
        Share.popup(url);
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};

export default Share;