require('@privacybydesign/irma-css/dist/irma.css');

const IrmaCore = require('@privacybydesign/irma-core');
const IrmaWeb  = require('@privacybydesign/irma-web');
const Dummy    = require('@privacybydesign/irma-dummy');

const irma = new IrmaCore({
  debugging: true,
  element:   '#irma-web-form',
  language:  'en',
  translations: {
    header:  'Continue with <i class="irma-web-logo">IRMA</i>',
    loading: 'Just one second please!'
  }
});

irma.use(IrmaWeb);
irma.use(Dummy);

irma.start()
.then(result => console.log("Successful disclosure! 🎉", result))
.catch(error => console.error("Couldn't do what you asked 😢", error));
