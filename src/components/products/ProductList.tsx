import '../global-module.css'


type Props = {
    id: number;
    created_at: Date | any;
    updated_at?: Date | any | null;
    name: string | number;
    val_max: string | number;
    val_min: string | number;
    brand: string | undefined;
    sector: string | undefined;
    un_med:string |undefined;
    bar_code: string;
    update: any,
    image?: string
    classe: string | undefined;
    grupo_fiscal: string | undefined 
    tipo_prod: string | undefined
    ncm:string | undefined
}

export function ProductList(props: Props) {
    return (
        <div className="container-global" >
            <div className="main-globalXX p-6">
                <ul className="main-global-form">
                    <li><b>ID</b> {props.id}</li>
                    <li><b>Cadastro</b> {props.created_at}</li>
                    <li><b>Alterado</b> {props.updated_at}</li>
                    <li><b>Descrição</b> {props.name}</li>
                    <li><b>Valor máximo</b> {props.val_max}</li>
                    <li><b>Valor mínimo</b> {props.val_min}</li>
                    <li><b>Marca</b> {props.brand}</li>
                    <li><b>Setor</b> {props.sector}</li>
                    <li><b>Un Medida</b> {props.un_med}</li>
                    <li><b>Barras</b> {props.bar_code}</li>
                    <li><b>Imagem</b> {props.image}</li>
                    <li><b>Classe</b> {props.classe}</li>
                    <li><b>Grupo Fiscal</b> {props.grupo_fiscal}</li>
                    <li><b>Tipo Produto</b> {props.tipo_prod}</li>
                    <li><b>NCM</b> {props.ncm}</li>
                    <>{props.update}</>
                </ul>
            </div>
        </div>
    )
}