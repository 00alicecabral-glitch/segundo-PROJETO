import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Register.css';
 
const Register: React.FC = () => {
  

  return (
    <div className='tela-register'>
      <IonHeader>
             <IonToolbar>
               <IonButtons slot="start">
                 <IonMenuButton />
               </IonButtons>
               <IonTitle>Register</IonTitle>
             </IonToolbar>
           </IonHeader>
           <IonCard>
      <IonCardHeader>
        <IonCardTitle color="secondary">Cadastro de informações</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
        <IonInput type="email" label="Nome" labelPlacement="floating" placeholder="Insira seu nome"></IonInput>
      </IonItem>
        <IonItem>
        <IonInput type="email" label="E-mail" labelPlacement="floating" placeholder="Insira o texto"></IonInput>
      </IonItem>
<IonItem>
        <IonInput type="password" label="Senha" labelPlacement="floating" placeholder="Insira a senha"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput type="number" label="Telefone" labelPlacement="floating" placeholder="Insira seu telefone"></IonInput>
      </IonItem>

      

      <IonButton size='full' color="dark">Confirma</IonButton>
      <IonButton size='full' fill='clear'>Cadastre-se</IonButton>
    
    
      </IonCardContent>
    </IonCard>
    </div>
  );
};

export default Register;
