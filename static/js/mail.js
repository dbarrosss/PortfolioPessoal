const publicKey = "V-h1kE29WIpeTVuMt";

emailjs.init(publicKey);

function sendEmail() {
  const serviceID = "default_service";
  const templateID = "template_e9q6ulm";

  emailjs.sendForm(serviceID, templateID, "#sendEmailForm").then(
    () => {
      alert("Enviado!");
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
}
