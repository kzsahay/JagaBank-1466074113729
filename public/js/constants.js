


/* CONSTANT VALUES */

// Sample text values
var spanishText = "Consciente de su patrimonio espiritual y moral, la Uni�n est� fundada sobre los valores indivisibles y universales de la dignidad humana, la libertad, la igualdad y la solidaridad, y se basa en los principios de la democracia y el Estado de Derecho. Al instituir la ciudadan�a de la Uni�n y crear un espacio de libertad, seguridad y justicia, sit�a a la persona en el centro de su actuaci�n.",
    frenchText = "Consciente de son patrimoine spirituel et moral, l'Union se fonde sur les valeurs indivisibles et universelles de dignit� humaine, de libert�, d'�galit� et de solidarit�; elle repose sur le principe de la d�mocratie et le principe de l'�tat de droit. Elle place la personne au coeur de son action en instituant la citoyennet� de l'Union et en cr�ant un espace de libert�, de s�curit� et de justice.",
    englishExpressiveText = "I have been assigned to handle your order status request. I am sorry to inform you that the items you requested are back-ordered. We apologize for the inconvenience. We don't know when those items will become available. Maybe next week but we are not sure at this time. Because we want you to be a happy customer, management has decided to give you a 50% discount!";
	englishText = "Conscious of its spiritual and moral heritage, the Union is founded on the indivisible, universal values of human dignity, freedom, equality and solidarity; it is based on the principles of democracy and the rule of law. It places the individual at the heart of its activities, by establishing the citizenship of the Union and by creating an area of freedom, security and justice.",
    germanText = "In dem Bewusstsein ihres geistig-religi�sen und sittlichen Erbes gr�ndet sich die Union auf die unteilbaren und universellen Werte der W�rde des Menschen, der Freiheit, der Gleichheit und der Solidarit�t. Sie beruht auf den Grunds�tzen der Demokratie und der Rechtsstaatlichkeit. Sie stellt den Menschen in den Mittelpunkt ihres Handelns, indem sie die Unionsb�rgerschaft und einen Raum der Freiheit, der Sicherheit und des Rechts begr�ndet.",
    italianText = "Consapevole del suo patrimonio spirituale e morale, l'Unione si fonda sui valori indivisibili e universali della dignit� umana, della libert�, dell'uguaglianza e della solidariet�; essa si basa sul principio della democrazia e sul principio dello Stato di diritto. Pone la persona al centro della sua azione istituendo la cittadinanza dell'Unione e creando uno spazio di libert�, sicurezza e giustizia.",
    japaneseText = "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
    brazilianPortugueseText = "Consciente do seu patrim�nio espiritual e moral, a Uni�o � fundamentada nos valores indivis�veis e universais da dignidade humana, liberdade, igualdade e solidariedade; � baseada nos princ�pios da democracia e estado de direito. Ela coloca o indiv�duo no centro de suas a��es, ao instituir a cidadania da Uni�o e ao criar um espa�o de liberdade, seguran�a e justi�a.";

// Sample text values with SSML
var spanishSSML = "Spanish SSML is not presently supported.",
    frenchSSML = "<p><s>Consciente de son patrimoine spirituel et moral<break time='300ms'/>,  l'Union se fonde sur les valeurs indivisibles et universelles de dignit� humaine,  <prosody rate='-15%'> de  libert�, d'�galit� et de solidarit�; </prosody> elle repose sur le principe de la d�mocratie et le principe de l'�tat de droit <break time='500ms'/>. Elle place la personne au coeur de son action en instituant la citoyennet� de l'Union et en cr�ant un espace de libert�, de s�curit� et de justice.</s></p>",
    englishExpresiveSSML = "<speak>I have been assigned to handle your order status request.<express-as type=\"Apology\"> I am sorry to inform you that the items you requested are back-ordered. We apologize for the inconvenience.</express-as><express-as type=\"Uncertainty\"> We don't know when those items will become available. Maybe next week but we are not sure at this time.</express-as><express-as type=\"GoodNews\">Because we want you to be a happy customer, management has decided to give you a 50% discount! </express-as></speak>";
    usEnglishSSML = "<p><s>Conscious of its spiritual and moral heritage <break time='300ms'/>, the Union is founded on the indivisible, universal values of <prosody rate='-15%'>human dignity, freedom, equality and solidarity.</prosody> It is based on the principles of democracy and the rule of law <break time='500ms'/>. </s> <s> It places the individual at the heart of its activities, <prosody rate='+15%'>by establishing the citizenship of the Union</prosody> and by creating an area of freedom, security and justice.</s></p>",
    ukEnglishSSML = "<p><s>Conscious of its spiritual and moral heritage <break time='300ms'/>, the Union is founded on the indivisible, universal values of human dignity, <prosody rate='-15%'>freedom, equality and solidarity.</prosody> It is based on the principles of democracy and the rule of law <break time='500ms'/>. </s> <s> It places the individual at the heart of its activities, <prosody rate='+15%'>by establishing the citizenship of the Union</prosody> and by creating an area of freedom, security and justice.</s></p>",
    germanSSML = "<p><s>In dem Bewusstsein ihres geistig-religi�sen und sittlichen <phoneme alphabet='ibm' ph='.1R.0bIs'>Erbes</phoneme> <break time='300ms'/> gr�ndet sich die Union auf die <prosody rate='-15%'>unteilbaren und universellen  Werte der W�rde des Menschen, der Freiheit, der Gleichheit und der Solidarit�t.</prosody> Sie beruht auf den Grunds�tzen der Demokratie und der Rechtsstaatlichkeit<break time='1s'/>. Sie stellt den Menschen in den Mittelpunkt ihres <phoneme alphabet='ibm' ph='.1hAn.0d@lns'> Handelns</phoneme>, <prosody rate='+10%'>indem sie die Unionsb�rgerschaft und einen Raum der Freiheit, der Sicherheit und des Rechts begr�ndet.</prosody></s></p>",
    italianSSML = "Italian SSML is not presently supported.",
    japaneseSSML = "Japanese SSML is not presently supported.",
    brazilianPortugueseSSML = "Brazilian Portuguese SSML is not presently supported.";

window.SPEECH_SYNTHESIS_VOICES = {
    voices: [
    {
        "name": "en-US_AllisonVoice",
        "language": "en-US",
        "customizable": true,
        "gender": "female, expressive",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-US_AllisonVoice",
        "description": "Allison: American English female voice."
    },
    {
        "name": "en-US_MichaelVoice",
        "language": "en-US",
        "customizable": true,
        "gender": "male",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-US_MichaelVoice",
        "description": "Michael: American English male voice."
    },
    {
        "name": "en-US_LisaVoice",
        "language": "en-US",
        "customizable": true,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-US_LisaVoice",
        "description": "Lisa: American English female voice."
    },
    {
        "name": "en-GB_KateVoice",
        "language": "en-GB",
        "customizable": false,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-GB_KateVoice",
        "description": "Kate: British English female voice."
    },
    {
        "name": "fr-FR_ReneeVoice",
        "language": "fr-FR",
        "customizable": false,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/fr-FR_ReneeVoice",
        "description": "Renee: French (fran�ais) female voice."
    },
    {
        "name": "de-DE_BirgitVoice",
        "language": "de-DE",
        "customizable": false,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/de-DE_BirgitVoice",
        "description": "Birgit: Standard German of Germany (Standarddeutsch) female voice."
    },
    {
        "name": "de-DE_DieterVoice",
        "language": "de-DE",
        "customizable": false,
        "gender": "male",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/de-DE_DieterVoice",
        "description": "Dieter: Standard German of Germany (Standarddeutsch) male voice."
    },
    {
        "name": "it-IT_FrancescaVoice",
        "language": "it-IT",
        "customizable": false,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/it-IT_FrancescaVoice",
        "description": "Francesca: Italian (italiano) female voice."
    },
    {
        "name": "ja-JP_EmiVoice",
        "language": "ja-JP",
        "customizable": false,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/ja-JP_EmiVoice",
        "description": "Emi: Japanese (???) female voice."
    },
    {
        "name": "pt-BR_IsabelaVoice",
        "language": "pt-BR",
        "customizable": false,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/pt-BR_IsabelaVoice",
        "description": "Isabela: Brazilian Portuguese (portugu�s brasileiro) female voice."
    },
    {
        "name": "es-ES_EnriqueVoice",
        "language": "es-ES",
        "customizable": false,
        "gender": "male",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/es-ES_EnriqueVoice",
        "description": "Enrique: Castilian Spanish (espa�ol castellano) male voice."
    },
    {
        "name": "es-ES_LauraVoice",
        "language": "es-ES",
        "customizable": false,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/es-ES_LauraVoice",
        "description": "Laura: Castilian Spanish (espa�ol castellano) female voice."
    },
    {
        "name": "es-US_SofiaVoice",
        "language": "es-US",
        "customizable": false,
        "gender": "female",
        "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/es-US_SofiaVoice",
        "description": "Sofia: North American Spanish (espa�ol norteamericano) female voice."
    }
  ]
}

  

