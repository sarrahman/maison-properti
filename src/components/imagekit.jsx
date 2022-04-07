import { IKImage, IKContext } from "imagekitio-react";

export const GetImage = (props) => {
  return (
    <IKContext
    publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint="https://ik.imagekit.io/sarrahman"
      transformationPosition="path"
      authenticationEndpoint={process.env.REACT_APP_IMAGEKIT_AUTH_ENDPOINT}
    >
      <IKImage
        path={props.path}
        transformation={[
          {
            width: props.size,
            height: props.size,
          },
        ]}
      />
    </IKContext>
  );
};

