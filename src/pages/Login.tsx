import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';
 
const Login: React.FC = () => {
  

  return (
    <div className='tela-login'>
     <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
        <IonInput type="email" label="E-mail" labelPlacement="floating" placeholder="Insira o texto"></IonInput>
      </IonItem>
<IonItem>
        <IonInput type="password" label="Senha" labelPlacement="floating" placeholder="Insira o texto"></IonInput>
      </IonItem>
      <IonItem>
      <IonButton fill='clear'>Esqueci a senha/e-mail</IonButton>
      </IonItem>
<IonItem>
      <IonButton size='full' color="dark">Login</IonButton>
      <IonButton size='full' fill='clear'>Cadastre-se</IonButton>
      </IonItem>
    
      </IonCardContent>
    </IonCard>
    </div>
  );
};

export default Login;
