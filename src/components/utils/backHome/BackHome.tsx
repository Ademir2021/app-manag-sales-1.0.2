import { checksUserLogged } from "../checksUserLogged/ChecksUserLogged"

export const BackHome = () => {

    function handleLink() {
        let link = ''
        if (checksUserLogged() !== undefined) {
            link = '/dashboardefault'
            window.location.replace(link);
    
        } else {
            link = '/'
            window.location.replace(link);
        }
        return link
    };
    function handleLocale(){
        let locale = ''
        if (checksUserLogged() !== undefined) {
            locale = "Retornar - Panel"
        } else {
            locale = 'Retornar - Home'
        }
        return locale
    };

    return (
        <div className="container-global">
        <button className="btn btn-primary"
        onClick={handleLink}>{handleLocale()}</button>
        </div>
    )
}
