import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    resources : {
        En: {
            translation: {
                search: "Search",
                sort: "Sort by",
                sortOpt1:"Featured",
                sortOpt2:"High to Low",
                sortOpt3:"Low to High",
                totalPrice:"Total Price",
                proceedtocheckout: "Proceed to Checkout",
                addbasket: "Add Basket"
            }
        },
        Tr: {
            translation: {
                search: "Ara",
                sort: "Filtrele",
                sortOpt1:"Önerilen",
                sortOpt2:"Fiyat: Azalan",
                sortOpt3:"Fiyat: Artan",
                totalPrice:"Toplam Fiyat",
                proceedtocheckout: "Ödemeyi Tamamla",
                addbasket: "Sepete Ekle"
            }
        }
    },
    lng: "En,Tr",
})
export default i18next