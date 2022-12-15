import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { APP_ID } from "@env";
// //@ts-ignore
// import { useOpenPix } from "@openpix/react";
import * as Clipboard from "expo-clipboard";
import QRCode from "react-native-qrcode-svg";
import Toast from "react-native-toast-message";
import { Typography } from "../Typography";
import { styles } from "./styles";
import documentIcon from "../../../assets/images/documentIcon.png";

export const PixPayment: React.FC = () => {
  const [charge, setCharge] = useState(null);

  useEffect(() => {
    newCharge();
  }, []);

  const copyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(
        "00020126330014BR.GOV.BCB.PIX011111692234609520400005303986540520.005802BR5925Erick Willian Magalhaes M6009SAO PAULO61080540900062070503***6304EBFC"
      );
      Toast.show({
        type: "success",
        text1: "Texto copiado com sucesso",
      });
    } catch (err) {
      console.error(err);
      Toast.show({
        type: "error",
        text1: "Falha ao copiar codigo pix, use o qrCode",
      });
    }
  };

  // const onPay = (charge: any) => {
  //   // TODO do something
  //   console.log("charge was paid");
  // };

  // const { chargeCreate } = useOpenPix({
  //   appID: APP_ID,
  //   onPay,
  // });

  const newCharge = async () => {
    // const payload = {
    //   correlationID: `bazar-1`,
    //   value: 100, // one cent
    //   comment: "Order Bazar",
    // };

    // const { charge, error } = await chargeCreate(payload);

    // if (error) {
    //   console.log("error", error);

    //   return;
    // }
    // setCharge(charge)

    setCharge(true);
  };

  if (charge) {
    return (
      <>
        <View>
          <Typography style={styles.title} type="subtitle">
            QRcode Pix
          </Typography>
          <Typography style={styles.subtitle} type="paragraph">
            Utilize o qrCode abaixo para realizar o pagamento
          </Typography>
        </View>
        <View style={styles.container}>
          <View style={styles.qrCode}>
            <QRCode size={200} value="http://awesome.link.qr" />
          </View>
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Image style={styles.copyButtonIcon} source={documentIcon} />
            <Typography style={styles.copyButtonText} type="paragraph">
              Click here to copy Pix Code
            </Typography>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  return <></>;
};
