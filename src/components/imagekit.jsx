import { IKImage, IKContext, IKUpload } from "imagekitio-react";

export const GetImage = (props) => {
  return (
    <IKContext
      publicKey="public_1O5i61miOqrME+rf8cfstWmHEjE="
      urlEndpoint="https://ik.imagekit.io/sarrahman"
      transformationPosition="path"
      authenticationEndpoint="https://kingandbos.herokuapp.com/auth"
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

export const UploadImage = (props) => {
  return (
    <IKContext
      publicKey="public_1O5i61miOqrME+rf8cfstWmHEjE="
      urlEndpoint="https://ik.imagekit.io/sarrahman"
      transformationPosition="path"
      authenticationEndpoint="https://kingandbos.herokuapp.com/auth"
    >
      <IKUpload
        onError={(error) => console.log(error)}
        onSuccess={(response) => props.urlImage(response.url)}
      />
    </IKContext>
  );
};
