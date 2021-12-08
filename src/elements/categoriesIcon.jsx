import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconFood } from '../assets/cat_comida.svg'
import { ReactComponent as IconShopping } from '../assets/cat_compras.svg'
import { ReactComponent as IconAccountsPayment } from '../assets/cat_cuentas-y-pagos.svg'
import { ReactComponent as IconFun } from '../assets/cat_diversion.svg'
import { ReactComponent as IconHome } from '../assets/cat_hogar.svg'
import { ReactComponent as IconClothes } from '../assets/cat_ropa.svg'
import { ReactComponent as IconHealth } from '../assets/cat_salud-e-higiene.svg'
import { ReactComponent as IconTransport } from '../assets/cat_transporte.svg'

const IconCategorie = ({ id }) => {
  IconCategorie.propTypes = {
    id: PropTypes.string.isRequired,
  }

  // THE NAME MUST BE THE ID OF THE CATEGORY ICON
  switch (id) {
    case 'food':
      return <IconFood />
    case 'shopping':
      return <IconShopping />
    case 'accounts and payment':
      return <IconAccountsPayment />
    case 'fun':
      return <IconFun />
    case 'home':
      return <IconHome />
    case 'clothes':
      return <IconClothes />
    case 'health':
      return <IconHealth />
    case 'transport':
      return <IconTransport />
    default:
      return <IconTransport />
  }
}

export default IconCategorie
