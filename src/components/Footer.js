function Footer () {
    return(
        <div className="footerContenedor">
            <div className="footerAlineacion">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="4" width="18" height="16" rx="3" />
                    <circle cx="9" cy="10" r="2" />
                    <line x1="15" y1="8" x2="17" y2="8" />
                    <line x1="15" y1="12" x2="17" y2="12" />
                    <line x1="7" y1="16" x2="17" y2="16" />
                </svg>
                <h5>Pagá con Mercado Pago</h5>
                <p>Usa Mercado Pago, nuestra soluciòn para pagar de forma segura y con el medio de pago que prefieras.</p>
                <a className="linkEfectoDos" href="https://www.mercadopago.com.uy/c/pagar-online-con-mercadopago">Cómo pagar con Mercado Pago</a>
            </div>
            <div className="footerAlineacion">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gift" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="8" width="18" height="4" rx="1" />
                    <line x1="12" y1="8" x2="12" y2="21" />
                    <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                </svg>
                <h5>Envío gratis desde $2.000</h5>
                <p>Elige Mercado Envíos en tus compras y disfruta de envíos gratis en miles de productos nuevos.</p>
                <a className="linkEfectoDos" href="https://envios.mercadolibre.com.uy/llevamos-tu-compra-donde-sea">Còmo recibo mis compras</a>
            </div>
            <div className="footerAlineacion">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-check" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 12l2 2l4 -4" />
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                </svg>
                <h5>Seguridad, de principio a fin</h5>
                <p>¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                <a className="linkEfectoDos" href="https://www.mercadolibre.com.uy/seguridad">Còmo te protegemos</a>
            </div>
        </div>
        
    );
}

export default Footer;