import template from './cleric-moves.template.js'
import { AbstractCharacterMoves } from '../abstract-character-moves'
import '../../../section-header/section-header'
import '../../../detailed-checkbox/detailed-checkbox'
import '../../../labeled-checkbox/labeled-checkbox'

const inputs = [
  ['#deity', 'deity'],
  ['#deity-healing-and-restoration', 'deityHealingAndRestoration'],
  ['#deity-bloody-conquest', 'deityBloodyConquest'],
  ['#deity-civilization', 'deityCivilization'],
  ['#deity-knowledge-and-hidden-things', 'deityKnowledgeAndHiddenThings'],
  ['#deity-the-downtrodden-and-forgotten', 'deityTheDowntroddenAndForgotten'],
  ['#deity-what-lies-beneath', 'deityWhatLiesBeneath'],
  ['#deity-petition-suffering', 'deityPetitionSuffering'],
  ['#deity-petition-gaining-secrets', 'deityPetitionGainingSecrets'],
  ['#deity-petition-offering', 'deityPetitionOffering'],
  ['#deity-petition-personal-victory', 'deityPetitionPersonalVictory'],
  ['#cast-a-spell', 'castASpell'],
  ['#divine-guidance', 'divineGuidance'],
  ['#commune', 'commune'],
  ['#turn-undead', 'turnUndead'],
  ['#chosen-one', 'chosenOne'],
  ['#divine-intervention', 'divineIntervention'],
  ['#invigorate', 'invigorate'],
  ['#the-scale-of-life-and-death', 'theScaleOfLifeAndDeath'],
  ['#penitent', 'penitent'],
  ['#serenity', 'serenity'],
  ['#first-aid', 'firstAid'],
  ['#orison-for-guidance', 'orisonForGuidance'],
  ['#empower', 'empower'],
  ['#divine-protection', 'divineProtection'],
  ['#devoted-healer', 'devotedHealer'],
  ['#anoited', 'anoited'],
  ['#martyr', 'martyr'],
  ['#apotheosis', 'apotheosis'],
  ['#divine-armor', 'divineArmor'],
  ['#reaper', 'reaper'],
  ['#greater-empower', 'greaterEmpower'],
  ['#providence', 'providence'],
  ['#greater-first-aid', 'greaterFirstAid'],
  ['#divine-invincibility', 'divineInvincibility'],
  ['#multiclass-dabbler', 'multiclassDabbler'],
  ['#light', 'light'],
  ['#sanctify', 'sanctify'],
  ['#guidance', 'guidance'],
  ['#bless', 'bless'],
  ['#cause-fear', 'causeFear'],
  ['#sanctuary', 'sanctuary'],
  ['#cure-light-wounds', 'cureLightWounds'],
  ['#detect-alignment', 'detectAlignment'],
  ['#magic-weapon', 'magicWeapon'],
  ['#speak-with-death', 'speakWithDeath'],
  ['#animate-dead', 'animateDead'],
  ['#resurrection', 'resurrection'],
  ['#cure-moderate-wounds', 'cureModerateWounds'],
  ['#darkness', 'darkness'],
  ['#hold-person', 'holdPerson'],
  ['#revelation', 'revelation'],
  ['#true-seeing', 'trueSeeing'],
  ['#trap-soul', 'trapSoul'],
  ['#cure-critical-wounds', 'cureCriticalWounds'],
  ['#divination', 'divination'],
  ['#contagion', 'contagion'],
  ['#words-of-the-unspeaking', 'wordsOfTheUnspeaking'],
  ['#word-of-recall', 'wordOfRecall'],
  ['#harm', 'harm'],
  ['#mark-of-death', 'markOfDeath'],
  ['#heal', 'heal'],
  ['#sever', 'sever'],
  ['#control', 'control'],
  ['#storm-of-vengeance', 'stormOfVengeance'],
  ['#consume-life', 'consumeLife'],
  ['#divine-presence', 'divinePresence'],
  ['#repair', 'repair'],
  ['#plague', 'plague'],
]

export class ClericMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-cleric-moves', ClericMoves)
