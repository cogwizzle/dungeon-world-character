import { html } from '../../../../utility/html-template'

export default html`<div>
  <dw-section-header>STARTING MOVES</dw-section-header>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="cast-a-spell"
      label="Cast A Spell (INT)"
    >
      <div>
        When you release a spell you've prepared, roll+INT. • On a 10+ the the
        spell is successfully cast and you may cast the spell again later. • On
        a 7-9 the spell is cast, but choose one:
      </div>
      <ul class="ml-5 text-sm list-disc">
        <li>
          You draw unwelcome attention or put yourself in a spot. The GM will
          tell you how.
        </li>
        <li>
          The spell disturbs the fabric of reality as it is cast; take -1
          ongoing to cast a spell until the next time you Prepare Spells.
        </li>
        <li>
          After it is cast, the spell is forgotten. You cannot cast the spell
          again until you prepare spells.
        </li>
      </ul>
      <div>
        Note that maintaining spells with ongoing effects will sometimes cause a
        penalty to your roll to cast a spell.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="spellbook"
      label="Spellbook"
    >
      <div>
        You have mastered several spells and inscribed them in your spellbook.
        You start out with three first level spells, as well as all your
        cantrips. Whenever you gain a level, you inscribe a new spell of your
        level or lower. Your spellbook is 1 weight.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="spell-defense"
      label="Spell Defense"
    >
      <div>
        You may end any ongoing spell immediately and use the energy of its
        dissipation to deflect an oncoming attack. The spell ends and you
        subtract its level from the damage done to you.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="prepare-spells"
      label="Prepare Spells"
    >
      <div>
        When you spend uninterrupted time (an hour or so) in quiet contemplation
        of your spellbook, you:
      </div>
      <ul class="ml-5 text-sm list-disc">
        <li>Lose any spells you already prepared</li>
        <li>
          Prepare new spells chosen from your spellbook whose total levels don't
          exceed your own level +1
        </li>
        <li>Prepare your cantrips which never count against your limit</li>
      </ul>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="ritual"
      label="Ritual"
    >
      <div>
        When you draw on a place of power to create a magical effect, tell the
        GM what you're trying to achieve. Ritual effects are always possible,
        but the GM will give you one to four of the following conditions:
      </div>
      <ul class="ml-5 text-sm list-disc">
        <li>It's going to take days/weeks/months</li>
        <li>First you must ____</li>
        <li>You'll need help from ____</li>
        <li>It will require a lot of money</li>
        <li>The best you can do is a lesser version, unreliable and limited</li>
        <li>You and your allies will risk danger from ____</li>
        <li>You'll have to disenchant ____ to do it</li>
      </ul>
    </dw-detailed-checkbox>
  </div>
  <dw-section-header>ADVANCED MOVES</dw-section-header>
  <div class="text-sm italic">
    When you gain a level from 2-10, you may choose from these moves.
  </div>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="prodigy"
      label="Prodigy"
    >
      <div>
        Choose a spell. You prepare that spell as if it were one level lower.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="logical"
      label="Logical"
    >
      <div>
        When you use strict deduction to analyse your surroundings, you can
        Discern Realities with INT instead of WIS.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="empower-magic"
      label="Empower Magic"
    >
      <div>
        When you cast a spell, on a 10+ you have the option of choosing from the
        7-9 list. If you do, you may additionally choose one of the following
        effects:
      </div>
      <ul class="ml-5 text-sm list-disc">
        <li>The spell's effects are maximized</li>
        <li>The spell's targets are doubled</li>
      </ul>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="arcane-ward"
      label="Arcane Ward"
    >
      <div>
        As long as you have at least one prepared spell of first level or
        higher, you have +2 armor.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="fount-of-knowledge"
      label="Fount Of Knowledge"
    >
      <div>
        When you spout lore about something no one else has any clue about, take
        +1.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="counterspell"
      label="Counterspell"
    >
      <div>
        When you attempt to counter an arcane spell that will otherwise affect
        you, stake one of your prepared spells on the defense and roll+INT. On a
        10+, the spell is countered and has no effect on you. On a 7-9, the
        spell is countered and you forget the spell that you staked. Your
        counterspell protects you alone; if the countered spell has other
        targets they are affected as normal.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="know-it-all"
      label="Know-It-All"
    >
      <div>
        When another player's character comes to you for advice and you tell
        them what you think is best, they get +1 forward when following your
        advice and you mark experience if they do.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="expanded-spellbook"
      label="Expanded Spellbook"
    >
      <div>
        Add a new spell from the spell list of any class to your spellbook.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="quick-study"
      label="Quick Study"
    >
      <div>
        When you see the effects of an arcane spell, ask the GM the name of the
        spell and its effects. You take +1 when acting on the answers.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="enchanter"
      label="Enchanter"
    >
      <div>
        When you have time and safety with a magic item you may ask the GM what
        it does. The GM will answer truthfully.
      </div>
    </dw-detailed-checkbox>
  </div>
  <hr />
  <div class="text-sm italic">
    When you gain a level from 6-10, you may choose from these moves.
  </div>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="master"
      label="Master"
    >
      <div class="text-sm italic">Requires: Prodigy</div>
      <div>
        Choose one spell in addition to the one you picked for Prodigy. You
        prepare that spell as if it were one level lower.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="greater-empower-magic"
      label="Greater Empower Magic"
    >
      <div>
        When you cast a spell, on a 10-11 you have the option of choosing from
        the 7-9 list. If you do, you may additionally choose one of the
        following effects. On a 12+ you get to choose one of these effects for
        free:
      </div>
      <ul class="ml-5 text-sm list-disc">
        <li>The spell's effects are maximized</li>
        <li>The spell's targets are doubled</li>
      </ul>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="protective-counter"
      label="Protective Counter"
    >
      <div class="text-sm italic">Requires: Counterspell</div>
      <div>
        When an ally within sight of you is affected by an arcane spell, you can
        counter it as if it affected you. If the spell affects multiple allies
        you must counter for each ally separately.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="enchanters-soul"
      label="Enchanter's Soul"
    >
      <div class="text-sm italic">Requires: Enchanter</div>
      <div>
        When you have time and safety with a magic item in a place of power you
        can empower that item so that the next time you use it its effects are
        amplified, the GM will tell you exactly how.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="ethereal-tether"
      label="Ethereal Tether"
    >
      <div>
        When you have time with a willing or helpless subject you can craft an
        ethereal tether with them. You perceive what they do and can discern
        realities about them or their surroundings, no matter the distance.
        Someone willingly tethered to you can communicate with you over the
        tether as if you were in the room with them.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="highly-logical"
      label="Highly Logical"
    >
      <div class="text-sm italic">Replaces: Logical</div>
      <div>
        When you use strict deduction to analyse your surroundings, you can
        Discern Realities with INT instead of WIS. On a 12+ you get to ask the
        GM any three questions, not limited by the list.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="spell-augmentation"
      label="Spell Augmentation"
    >
      <div>
        When you deal damage to a creature, you can shunt a spell's energy into
        them—end one of your ongoing spells and add the spell's level to the
        damage dealt.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="mystical-puppet-strings"
      label="Mystical Puppet Strings"
    >
      <div>
        When you use magic to control a person's actions, they have no memory of
        what you had them do and bear you no ill will.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="spell-powered"
      label="Spell Powered"
    >
      <div>
        When you have time, arcane materials, and a safe space, you can create
        your own place of power. Describe to the GM what kind of power it is and
        how you're binding it to this place, the GM will tell you one kind of
        creature that will have an interest in this.
      </div>
    </dw-detailed-checkbox>
  </div>
  <dw-section-header>CANTRIPS</dw-section-header>
  <div class="text-sm italic">
    You prepare all of your cantrips every time you Prepare Spells without
    having to select them or count them toward your allotment of spells.
  </div>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="light"
      label="Light"
    >
      <div class="text-sm italic">Cantrip</div>
      <div>
        An item you touch glows with arcane light, about as bright as a torch.
        It gives off no heat or sound and requires no fuel, but it is otherwise
        like a mundane torch. You have complete control of the color of the
        flame. The spell lasts as long as it is in your presence.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="unseen-servant"
      label="Unseen Servant"
    >
      <div class="text-sm italic">Cantrip</div>
      <div>
        You conjure a simple invisible construct that can do nothing but carry
        items. It has Load 3 and carries anything you hand to it. It cannot pick
        up items on its own and can only carry those you give to it. Items
        carried by an unseen servant appear to float in the air a few paces
        behind you. An unseen servant that takes damage or leaves your presence
        is immediately dispelled, dropping any items it carried.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="prestidigitation"
      label="Prestidigitation"
    >
      <div class="text-sm italic">Cantrip</div>
      <div>
        You perform minor tricks of true magic. If you touch an item as part of
        the casting you can make cosmetic changes to it: clean it, soil it, cool
        it, warm it, flavor it, or change its color. If you cast the spell
        without touching an item you can instead create minor illusions no
        bigger than yourself. Prestidigitation illusions are crude and clearly
        illusions—they won't fool anyone, but they might entertain them.
      </div>
    </dw-detailed-checkbox>
  </div>
  <dw-section-header>FIRST LEVEL SPELLS</dw-section-header>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="contact-spirits"
      label="Contact Spirits"
    >
      <div class="text-sm italic">1st Level Summoning</div>
      <div>
        Name the spirit you wish to contact (or leave it to the GM). You pull
        that creature through the planes, just close enough to speak to you. It
        is bound to answer any one question you ask to the best of its ability.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="charm-person"
      label="Charm Person"
    >
      <div class="text-sm italic">1st Level Enchantment (ongoing)</div>
      <div>
        The person (not beast or monster) you touch while casting this spell
        counts you as a friend until they take damage or you prove otherwise.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="telepathy"
      label="Telepathy"
    >
      <div class="text-sm italic">1st Level Divination (ongoing)</div>
      <div>
        You form a telepathic bond with a single person you touch, enabling you
        to converse with that person through your thoughts. You can only have
        one telepathic bond at a time.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="detect-magic"
      label="Detect Magic"
    >
      <div class="text-sm italic">1st Level Divination</div>
      <div>
        One of your senses is briefly attuned to magic. The GM will tell you
        what here is magical.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="invisibility"
      label="Invisibility"
    >
      <div class="text-sm italic">1st Level Illusion (ongoing)</div>
      <div>
        Touch an ally: nobody can see them. They're invisible! The spell
        persists until the target attacks or you dismiss the effect. While the
        spell is ongoing you can't cast a spell.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox
      class="col-span-2 lg:col-span-1"
      key="alarm"
      label="Alarm"
    >
      <div class="text-sm italic">1st Level</div>
      <div>
        Walk a wide circle as you cast this spell. Until you prepare spells
        again your magic will alert you if a creature crosses that circle. Even
        if you are asleep, the spell will shake you from your slumber.
      </div>
    </dw-detailed-checkbox>
  </div>
  <dw-section-header>THIRD LEVEL SPELLS</dw-section-header>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox key="dispel-magic" label="Dispel Magic">
      <div class="text-sm italic">3rd Level</div>
      <div>
        Choose a spell or magic effect in your presence: this spell rips it
        apart. Lesser spells are ended, powerful magic is just reduced or
        dampened so long as you are nearby.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="fireball" label="Fireball">
      <div class="text-sm italic">3rd Level Evocation</div>
      <div>
        You evoke a mighty ball of flame that envelops your target and everyone
        nearby, inflicting 2d6 damage which ignores armor.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="mirror-image" label="Mirror Image">
      <div class="text-sm italic">3rd Level Illusion</div>
      <div>
        You create an illusory image of yourself. When you are attacked, roll a
        d6. On a 4, 5, or 6 the attack hits the illusion instead, the image then
        dissipates and the spell ends.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="vision-through-time" label="Vision Through Time">
      <div class="text-sm italic">3rd Level Divination</div>
      <div>
        Cast this spell and gaze into a reflective surface to see into the
        depths of time. The GM will reveal the details of a grim portent to
        you—a bleak event that will come to pass without your intervention.
        They'll tell you something useful about how you can interfere with the
        grim portent's dark outcomes. Rare is the portent that claims “You'll
        live happily ever after.” Sorry.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="mimic" label="Mimic">
      <div class="text-sm italic">3rd Level (ongoing)</div>
      <div>
        You take the form of someone you touch while casting this spell. Your
        physical characteristics match theirs exactly but your behavior may not.
        This change persists until you take damage or choose to return to your
        own form. While this spell is ongoing you lose access to all your wizard
        moves.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="sleep" label="Sleep">
      <div class="text-sm italic">3rd Level Enchantment</div>
      <div>
        1d4 enemies you can see of the GM's choice fall asleep. Only creatures
        capable of sleeping are affected. They awake as normal: loud noises,
        jolts, pain.
      </div>
    </dw-detailed-checkbox>
  </div>
  <dw-section-header>FIFTH LEVEL SPELLS</dw-section-header>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox key="cage" label="Cage">
      <div class="text-sm italic">5th Level Evocation (ongoing)</div>
      <div>
        The target is held in a cage of magical force. Nothing can get in or out
        of the cage. The cage remains until you cast another spell or dismiss
        it. While the spell is ongoing, the caged creature can hear your
        thoughts and you cannot leave sight of the cage.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="summon-monster" label="Summon Monster">
      <div class="text-sm italic">5th Level Summoning (ongoing)</div>
      <div>
        A monster appears and aids you as best it can. Treat it as your
        character, but with access to only the basic moves. It has +1 modifier
        for all stats, 1 HP, and uses your damage dice. The monster also gets
        your choice of 1d6 of these traits:
      </div>
      <ul class="ml-5 text-sm list-disc">
        <li>It has +2 instead of +1 to one stat</li>
        <li>It's not reckless</li>
        <li>It does 1d8 damage</li>
        <li>Its bond to your plane is strong: +2 HP for each level you have</li>
        <li>It has some useful adaptation</li>
      </ul>
      <div>
        The GM will tell you the type of monster you get based on the traits you
        select. The creature remains on this plane until it dies or you dismiss
        it. While the spell is ongoing you take -1 to cast a spell.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="polymorph" label="Polymorph">
      <div class="text-sm italic">5th Level Enchantment</div>
      <div>
        Your touch reshapes a creature entirely, they stay in the form you craft
        until you cast a spell. Describe the new shape you craft, including any
        stat changes, significant adaptations, or major weaknesses. The GM will
        then tell you one or more of these:
      </div>
      <ul class="ml-5 text-sm list-disc">
        <li>The form will be unstable and temporary</li>
        <li>The creature's mind will be altered as well</li>
        <li>The form has an unintended benefit or weakness</li>
      </ul>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="contact-other-plane" label="Contact Other Plane">
      <div class="text-sm italic">5th Level Divination</div>
      <div>
        You send a request to another plane. Specify who or what you'd like to
        contact by location, type of creature, name, or title. You open a
        two-way communication with that creature. Your communication can be cut
        off at any time by you or the creature you contacted.
      </div>
    </dw-detailed-checkbox>
  </div>
  <dw-section-header>SEVENTH LEVEL SPELLS</dw-section-header>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox key="contingency" label="Contingency">
      <div class="text-sm italic">7th Level Evocation</div>
      <div>
        Choose a 5th level or lower spell you know. Describe a trigger condition
        using a number of words equal to your level. The chosen spell is held
        until you choose to unleash it or the trigger condition is met,
        whichever happens first. You don't have to roll for the held spell, it
        just takes effect. You may only have a single contingent spell held at a
        time; if you cast Contingency while you have a held spell, the new held
        spell replaces the old one.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="shadow-walk" label="Shadow Walk">
      <div class="text-sm italic">7th Level Illusion</div>
      <div>
        The shadows you target with this spell become a portal for you and your
        allies. Name a location, describing it with a number of words up to your
        level. Stepping through the portal deposits you and any allies present
        when you cast the spell at the location you described. The portal may
        only be used once by each ally.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="dominate" label="Dominate">
      <div class="text-sm italic">7th Level Enchantment (ongoing)</div>
      <div>
        Your touch pushes your mind into someone else's. You gain 1d4 hold.
        Spend one hold to make the target take one of these actions:
      </div>
      <ul class="ml-5 text-sm list-disc">
        <li>Speak a few words of your choice</li>
        <li>Give you something they hold</li>
        <li>Make a concerted attack on a target of your choice</li>
        <li>Truthfully answer one question</li>
      </ul>
      <div>
        If you run out of hold the spell ends. If the target takes damage you
        lose 1 hold. While the spell is ongoing you cannot cast a spell.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="true-seeing" label="True Seeing">
      <div class="text-sm italic">7th Level Divination (ongoing)</div>
      <div>
        You see all things as they truly are. This effect persists until you
        tell a lie or dismiss the spell. While this spell is ongoing you take -1
        to cast a spell.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="cloudkill" label="Cloudkill">
      <div class="text-sm italic">7th Level Summoning (ongoing)</div>
      <div>
        A cloud of fog drifts into this realm from beyond the Black Gates of
        Death, filling the immediate area. Whenever a creature in the area takes
        damage it takes an additional, separate 1d6 damage which ignores armor.
        This spell persists so long as you can see the affected area, or until
        you dismiss it.
      </div>
    </dw-detailed-checkbox>
  </div>
  <dw-section-header>NINTH LEVEL SPELLS</dw-section-header>
  <div class="grid grid-cols-2 gap-2">
    <dw-detailed-checkbox key="alert" label="Alert">
      <div class="text-sm italic">9th Level Divination</div>
      <div>
        Describe an event. The GM will tell you when that event occurs, no
        matter where you are or how far away the event is. If you choose, you
        can view the location of the event as though you were there in person.
        You can only have one Alert active at a time.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="shelter" label="Shelter">
      <div class="text-sm italic">9th Level Evocation (ongoing)</div>
      <div>
        You create a structure out of pure magical power. It can be as large as
        a castle or as small as a hut, but is impervious to all non-magical
        damage. The structure endures until you leave it or you end the spell.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="antipathy" label="Antipathy">
      <div class="text-sm italic">9th Level Enchantment (ongoing)</div>
      <div>
        Choose a target and describe a type of creature or an alignment.
        Creatures of the specified type or alignment cannot come within sight of
        the target. If a creature of the specified type does find itself within
        sight of the target, it immediately flees. This effect continues until
        you leave the target's presence or you dismiss the spell. While the
        spell is ongoing you take -1 to cast a spell.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="soul-gem" label="Soul Gem">
      <div class="text-sm italic">9th Level</div>
      <div>
        You trap the soul of a dying creature within a gem. The trapped creature
        is aware of its imprisonment but can still be manipulated through
        spells, parley, and other effects. All moves against the trapped
        creature are at +1. You can free the soul at any time but it can never
        be recaptured once freed.
      </div>
    </dw-detailed-checkbox>
    <dw-detailed-checkbox key="perfect-summons" label="Perfect Summons">
      <div class="text-sm italic">9th Level Summoning</div>
      <div>
        You teleport a creature to your presence. Name a creature or give a
        short description of a type of creature. If you named a creature, that
        creature appears before you. If you described a type of creature, a
        creature of that type appears before you.
      </div>
    </dw-detailed-checkbox>
  </div>
</div> `
