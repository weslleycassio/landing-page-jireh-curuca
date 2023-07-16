import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Conheça o Curuça</h2>
          <h5 className={classes.description}>
          Venha morar na Vila Guarani em Mauá! Os apartamentos do Residencial Curuça são perfeitos para você e sua família, com Suíte e Sacada Grill. Não perca essa oportunidade!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
          <img
                src="img/faces/map.png" 
                alt="caixa"
                width={50}
                height={50}
                
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
            <InfoArea
              title="Ótima Localização"
              description="Desfrute de uma ótima localização e venha conhecer esse empreendimento que une conforto, modernidade e conveniência."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <img
                src="img/faces/apartmentDF.png" 
                alt="caixa"
                width={50}
                height={50}
                
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
            <InfoArea
              title="Sacada Grill"
              description="Com Varanda Grill, disponíveis em opções de 2 ou 3 Dormitórios Escolha entre as metragens de 53 m², 66 m², 67 m² e 69 m², todas com ótimos espaços para você aproveitar."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
                src="img/faces/caixa.png" 
                alt="caixa"
                width={50}
                height={50}
                
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
            <InfoArea
              title="Facilidades com a Caixa Econômica"
              description="A entrada é facilitada, tornando o sonho da casa própria ainda mais acessível.
              Não deixe de conferir os valores e garantir o seu lugar no Residencial Curuça. Saiba mais detalhes e entre em contato conosco para mais informações."
              icon={Fingerprint}
              vertical
            />
            
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
