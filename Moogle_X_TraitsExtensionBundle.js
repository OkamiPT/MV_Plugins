//=============================================================================
// Traits Extension Bundle by Moogle_X
// Moogle_X_TraitsExtensionBundle.js
// Created on: February 1st 2016
//=============================================================================

var Imported = Imported || {};
Imported.Moogle_X_TEB = true;

var Moogle_X = Moogle_X || {};
Moogle_X.TEB = Moogle_X.TEB || {};

//=============================================================================
/*:
 * @plugindesc v1.0 Adds plenty of new traits to your game.
 * @author Moogle_X
 *
 * @param Victory Cry Revival
 * @desc Allows Victory Cry to revive dead actor? 1:Yes 0:No
 * @default 1
 *
 * @param Catnip Damage
 * @desc This is the damage value when Catnip trait is in effect.
 * @default 9999
 *
 * @param Apply Catnip on Effects
 * @desc Allows Catnip to modify skill/item's effects amount? 1:Yes 0:No
 * @default 1
 *
 * @param Apply BER to Inactive
 * @desc Apply Battle End Regeneration (BER) to inactive party members? 1:Yes 0:No
 * @default 0
 *
 * @param Natural Cure List
 * @desc This is the list of state id(s) that will be removed by Natural Cure. Example: 3 6 12
 * @default 4 5 6 7 8 9 10
 *
 * @param Spellbound List
 * @desc This is the list of state id(s) that will be affected by Spellbound. Example: 3 6 12
 * @default 14 15 16
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin adds plenty of new traits to your game.
 * All of these new traits will be carried over with Passive Skills.
 *
 * ============================================================================
 * 1. Victory Cry
 * ============================================================================
 * Notetag: <TEB Victory Cry>
 * Usable on: Actors, Classes, Weapons, Armors, States.
 * Description:
 *   Heal actor at full HP and MP at the end of battle. Turn on "Victory Cry
 *   Revival" parameter if you want this trait to affect dead actor.
 *
 * Source: Shin Megami Tensei series.
 *
 * ============================================================================
 * 2. Catnip
 * ============================================================================
 * Notetag: <TEB Catnip>
 * Usable on: Actors, Classes, Weapons, Armors, States, Enemies.
 * Description:
 *   When in critical health (< 25% MaxHP), "damage value" (damage or healing)
 *   automatically becomes 9999. Value can be changed in "Catnip Damage" plugin
 *   parameter.
 *     Catnip trait also affects skill/item's effects, in particular:
 *   - Recover HP
 *   - Recover MP
 *   - Gain TP
 *   All of those effects' values will become 9999 as well when user is in
 *   critical health. If you want to disable Catnip value modification on above
 *   three effects, simply turn off "Apply Catnip on Effects" parameter in the
 *   plugin configurations.
 *
 * Source: Final Fantasy X-2.
 *
 * ============================================================================
 * 3. Initial Battle State (IBS)
 * ============================================================================
 * Notetag: <TEB IBS: x>          // Change x to state ID.
 * Usable on: Actors, Classes, Weapons, Armors, States, Enemies.
 * Description:
 *   On battle start, add state x to this battler. This trait is handy if want
 *   a battler start with certain (impermanent) state at the start of battle.
 *   Insert multiple copies of this notetag for multiple Initial Battle States.
 *
 * Source: Persona 4 (Auto-Tarukaja).
 *
 * ============================================================================
 * 4. Initial Battle State - Party (IBSP)
 * ============================================================================
 * Notetag: <TEB IBSP: x>          // Change x to state ID.
 * Usable on: Actors, Classes, Weapons, Armors, States.
 * Description:
 *   On battle start, add state x to all actors in active battle party. This
 *   trait is similar with IBS, except it applies to whole party. Also, you
 *   can't use it on Enemies. Insert multiple copies of this notetag for
 *   multiple Initial Battle States on party.
 *
 * Source: Persona 4 (Auto-Matarukaja).
 *
 * ============================================================================
 * 5. Discount
 * ============================================================================
 * Notetag: <TEB Discount: x%>
 * Usable on: Actors, Classes, Weapons, Armors, States.
 * Description:
 *   Decrease the buying price of all items in the shop by x%.
 *   Shop will combine the total discount rate of all members in active battle
 *   party only. Discount rate from inactive party members will be excluded.
 *
 *   If Potion has normal price of 200 and party has 25% total discount rate,
 *   the Potion will have the price reduced to 150.
 *
 *   Multiple copies of this trait will be additive instead of multiplicative.
 *   There is a cap for maximum total discount rate. Total discount rate is
 *   capped at 100% (obviously).
 *
 * Source: Ragnarok Online (Merchant's Discount Skill).
 *
 * ============================================================================
 * 6. Overcharge
 * ============================================================================
 * Notetag: <TEB Overcharge: x%>
 * Usable on: Actors, Classes, Weapons, Armors, States.
 * Description:
 *   Increase the selling price of all items in the shop by x%.
 *   Shop will combine the total overcharge rate of all members in active battle
 *   party only. Overcharge rate from inactive party members will be excluded.
 *
 *   If Potion has standard selling price of 100 and party has 10% total
 *   overcharge rate, the Potion will have the selling price increased to 110.
 *
 *   Multiple copies of this trait will be additive instead of multiplicative.
 *   There is no cap for maximum total overcharge rate. Please watch out for
 *   potential infinite money issue.
 *
 * Source: Ragnarok Online (Merchant's Overcharge Skill).
 *
 * ============================================================================
 * 7. Static Regeneration (SR)
 * ============================================================================
 * Notetag: <TEB SR HP: x>
 *          <TEB SR HP: -x>
 *          <TEB SR MP: x>
 *          <TEB SR MP: -x>
 *
 * Usable on: Actors, Classes, Weapons, Armors, States, Enemies.
 * Description:
 *   By default, you can only apply regeneration based on percentage value only
 *   like 10% of Max HP or Max MP. Now, you can apply static value regeneration
 *   like straight up +1245 HP or -15 MP regeneration.
 *
 *   Multiple copies of these traits will be additive (obviously).
 *
 * ============================================================================
 * 8. Battle End Regeneration (BER)
 * ============================================================================
 * Notetag: <TEB BER HP: x%>      // Percentage HP increase.
 *          <TEB BER HP: -x%>     // Percentage HP decrease.
 *          <TEB BER HP: x>       // Static HP increase.
 *          <TEB BER HP: -x>      // Static HP decrease.
 *          <TEB BER MP: x%>      // Percentage MP increase.
 *          <TEB BER MP: -x%>     // Percentage MP decrease.
 *          <TEB BER MP: x>       // Static MP increase.
 *          <TEB BER MP: -x>      // Static MP decrease.
 *
 * Usable on: Actors, Classes, Weapons, Armors, States.
 * Description:
 *   Another set of regeneration traits that occur at the END OF BATTLE only.
 *   These regeneration will be applied to all actors in active battle party
 *   only at the end of battle.
 *
 *   By default, inactive party members do NOT receive any regeneration from
 *   these traits. If you want inactive party members to be affected by These
 *   traits, you must turn on the "Apply BER to Inactive" parameter in the
 *   plugin configurations.
 *
 *   Dead actors will not receive any regeneration from these traits.
 *
 * ============================================================================
 * 9. Piercing Magic
 * ============================================================================
 * Notetag: <TEB Piercing Magic>
 * Usable on: Actors, Classes, Weapons, Armors, States, Enemies.
 * Description:
 *   ALl actors and enemies with this trait will not trigger Magic Reflection
 *   when they use magical skills.
 *
 * Source: Final Fantasy series.
 *
 * ============================================================================
 * 10. Ignore Counter
 * ============================================================================
 * Notetag: <TEB Ignore Counter>
 * Usable on: Actors, Classes, Weapons, Armors, States, Enemies.
 * Description:
 *   ALl actors and enemies with this trait will not trigger Counter Attack
 *   when they use physical skills.
 *
 * ============================================================================
 * 11. Natural Cure
 * ============================================================================
 * Notetag: <TEB Natural Cure: x%>
 * Usable on: Actors, Classes, Weapons, Armors, States, Enemies.
 * Description:
 *   ALl actors and enemies with this trait will have x% chance to remove some
 *   pre-defined states at the end of each turn. You can decide which states
 *   to be removed by this trait in the "Natural Cure List" plugin parameter.
 *
 *   Multiple copies of this trait will be additive instead of multiplicative.
 *
 * Source: Pokemon (Shed Skin ability).
 *
 * ============================================================================
 * 12. Spellbound
 * ============================================================================
 * Notetag: <TEB Spellbound: x>
 * Usable on: Actors, Classes, Weapons, Armors, States, Enemies.
 * Description:
 *   ALl actors and enemies with this trait will get extra x turns duration
 *   for certain states. In other words, their states' duration will last longer
 *   than usual.
 *
 *   You can decide which states to be affected by Spellbound trait in the
 *   "Spellbound List" parameter in the plugin configuration. Any states not
 *   listed in that parameter will not receive duration bonus.
 *
 *   Multiple copies of this trait will be additive instead of multiplicative.
 *
 * Source: FFTA2 (Time Mage's Extend spell).
 *
 * ============================================================================
 * Notetags and Plugin Commands List
 * ============================================================================
 * Actors, Classes, Weapons, Armors, and States Notetag:
 * <TEB Victory Cry>
 * <TEB IBSP: x>
 * <TEB Discount: x%>
 * <TEB Overcharge: x%>
 * <TEB BER HP: x%>
 * <TEB BER HP: -x%>
 * <TEB BER HP: x>
 * <TEB BER HP: -x>
 * <TEB BER MP: x%>
 * <TEB BER MP: -x%>
 * <TEB BER MP: x>
 * <TEB BER MP: -x>
 *
 * Actors, Classes, Weapons, Armors, States, and Enemies Notetag:
 * <TEB Catnip>
 * <TEB IBS: x>
 * <TEB SR HP: x>
 * <TEB SR HP: -x>
 * <TEB SR MP: x>
 * <TEB SR MP: -x>
 * <TEB Piercing Magic>
 * <TEB Ignore Counter>
 * <TEB Natural Cure: x%>
 * <TEB Spellbound: x>
 *
 * ============================================================================
 * Compatibility
 * ============================================================================
 * This plugin must be positioned BELOW any of these plugins:
 *
 * YEP_ShopMenuCore
 * YEP_ElementReflect
 *
 * If you use any of the above plugins, please make sure to position Traits
 * Extension Bundle plugin under those plugins.
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 * Free to use in both commercial and non-commercial project as long as credit
 * is given.
 *
 * ============================================================================
 * Change Log
 * ============================================================================
 * Version 1.0:
 * - Completed plugin.
 *
 */
//=============================================================================

(function() { // IIFE

//=============================================================================
// Parameter Variables
//=============================================================================

Moogle_X.TEB.parameters = PluginManager.parameters('Moogle_X_TraitsExtensionBundle');
Moogle_X.TEB.vCryRevive = Number(Moogle_X.TEB.parameters['Victory Cry Revival']) != 0;
Moogle_X.TEB.catnipDamage = Number(Moogle_X.TEB.parameters['Catnip Damage'] || 0);
Moogle_X.TEB.catnipEffect = Number(Moogle_X.TEB.parameters['Apply Catnip on Effects']) != 0;
Moogle_X.TEB.berInactive = Number(Moogle_X.TEB.parameters['Apply BER to Inactive']) != 0;
Moogle_X.TEB.ntrCureList = String(Moogle_X.TEB.parameters['Natural Cure List'] || 0);
Moogle_X.TEB.spellboundList = String(Moogle_X.TEB.parameters['Spellbound List'] || 0);

var ntrCureAilments = Moogle_X.TEB.ntrCureList.split(' ');
Moogle_X.TEB.ntrCureList = [];
for (var i = 0; i < ntrCureAilments.length; i++) {
    Moogle_X.TEB.ntrCureList.push(Number(ntrCureAilments[i]));
}

var spellboundStates = Moogle_X.TEB.spellboundList.split(' ');
Moogle_X.TEB.spellboundList = [];
for (var i = 0; i < spellboundStates.length; i++) {
    Moogle_X.TEB.spellboundList.push(Number(spellboundStates[i]));
}


//=============================================================================
// Constant Declaration
//=============================================================================

Game_BattlerBase.TRAIT_TEB_VICTORY_CRY = 127; // New trait code.
Game_BattlerBase.TRAIT_TEB_CATNIP = 128; // New trait code.
Game_BattlerBase.TRAIT_TEB_IBS = 129; // New trait code.
Game_BattlerBase.TRAIT_TEB_IBSP = 130; // New trait code.
Game_BattlerBase.TRAIT_TEB_DISCOUNT = 131; // New trait code.
Game_BattlerBase.TRAIT_TEB_OVERCHARGE = 132; // New trait code.
Game_BattlerBase.TRAIT_TEB_STATIC_HP_REGEN = 134; // New trait code.
Game_BattlerBase.TRAIT_TEB_STATIC_MP_REGEN = 135; // New trait code.
Game_BattlerBase.TRAIT_TEB_BER_HP_STATIC = 136; // New trait code.
Game_BattlerBase.TRAIT_TEB_BER_HP_PERCENTAGE = 137; // New trait code.
Game_BattlerBase.TRAIT_TEB_BER_MP_STATIC = 138; // New trait code.
Game_BattlerBase.TRAIT_TEB_BER_MP_PERCENTAGE = 139; // New trait code.
Game_BattlerBase.TRAIT_TEB_PIERCING_MAGIC = 140; // New trait code.
Game_BattlerBase.TRAIT_TEB_IGNORE_COUNTER = 141; // New trait code.
Game_BattlerBase.TRAIT_TEB_NATURAL_CURE = 142; // New trait code.
Game_BattlerBase.TRAIT_TEB_SPELLBOUND = 143; // New trait code.


//=============================================================================
// DataManager
//=============================================================================

Moogle_X.TEB.DatabaseLoaded = false;
Moogle_X.TEB.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Moogle_X.TEB.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!Moogle_X.TEB.DatabaseLoaded) {
        DataManager.readNotetags_TEB1($dataActors);
        DataManager.readNotetags_TEB1($dataClasses);
        DataManager.readNotetags_TEB1($dataWeapons);
        DataManager.readNotetags_TEB1($dataArmors);
        DataManager.readNotetags_TEB1($dataStates);
        DataManager.readNotetags_TEB2($dataActors);
        DataManager.readNotetags_TEB2($dataClasses);
        DataManager.readNotetags_TEB2($dataWeapons);
        DataManager.readNotetags_TEB2($dataArmors);
        DataManager.readNotetags_TEB2($dataStates);
        DataManager.readNotetags_TEB2($dataEnemies);
        Moogle_X.TEB.DatabaseLoaded = true;
    }
		return true;
};

DataManager.readNotetags_TEB1 = function(group) {
    var note1 = /<(?:TEB VICTORY CRY)>/i;
    var note2 = /<(?:TEB IBSP):[ ](\d+)>/i;
    var note3 = /<(?:TEB DISCOUNT):[ ](\d+)\%>/i;
    var note4 = /<(?:TEB OVERCHARGE):[ ](\d+)\%>/i;
    var note5 = /<(?:TEB BER HP):[ ](.*)\%>/i;
    var note6 = /<(?:TEB BER HP):[ ](.*)>/i;
    var note7 = /<(?:TEB BER MP):[ ](.*)\%>/i;
    var note8 = /<(?:TEB BER MP):[ ](.*)>/i;

	  for (var n = 1; n < group.length; n++) {
		    var obj = group[n];
		    var notedata = obj.note.split(/[\r\n]+/);

		    for (var i = 0; i < notedata.length; i++) {
			      var line = notedata[i];

            // Victory Cry
			      if (line.match(note1)) {
                var code = Game_BattlerBase.TRAIT_SPECIAL_FLAG;
                var dataId = Game_BattlerBase.TRAIT_TEB_VICTORY_CRY;
                var value = 0;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Initial Battle State - Party
            } else if (line.match(note2)) {
                var code = Game_BattlerBase.TRAIT_TEB_IBSP;
                var dataId = Number(RegExp.$1);
                var value = 0;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Discount
            } else if (line.match(note3)) {
                var code = Game_BattlerBase.TRAIT_TEB_DISCOUNT;
                var dataId = 0;
                var value = Number(RegExp.$1) / 100;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Overcharge
            } else if (line.match(note4)) {
                var code = Game_BattlerBase.TRAIT_TEB_OVERCHARGE;
                var dataId = 0;
                var value = Number(RegExp.$1) / 100;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Battle End Regeneration (HP Percentage)
            } else if (line.match(note5)) {
                var code = Game_BattlerBase.TRAIT_TEB_BER_HP_PERCENTAGE;
                var dataId = 0;
                var value = Number(RegExp.$1) / 100;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Battle End Regeneration (HP Static)
            } else if (line.match(note6)) {
                var code = Game_BattlerBase.TRAIT_TEB_BER_HP_STATIC;
                var dataId = 0;
                var value = Number(RegExp.$1);
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Battle End Regeneration (MP Percentage)
            } else if (line.match(note7)) {
                var code = Game_BattlerBase.TRAIT_TEB_BER_MP_PERCENTAGE;
                var dataId = 0;
                var value = Number(RegExp.$1) / 100;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Battle End Regeneration (MP Static)
            } else if (line.match(note8)) {
                var code = Game_BattlerBase.TRAIT_TEB_BER_MP_STATIC;
                var dataId = 0;
                var value = Number(RegExp.$1);
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);
            }
		    }
	  }
};

DataManager.readNotetags_TEB2 = function(group) {
    var note1 = /<(?:TEB CATNIP)>/i;
    var note2 = /<(?:TEB IBS):[ ](\d+)>/i;
    var note3 = /<(?:TEB SR HP):[ ](.*)>/i;
    var note4 = /<(?:TEB SR MP):[ ](.*)>/i;
    var note5 = /<(?:TEB PIERCING MAGIC)>/i;
    var note6 = /<(?:TEB IGNORE COUNTER)>/i;
    var note7 = /<(?:TEB NATURAL CURE):[ ](\d+)\%>/i;
    var note8 = /<(?:TEB SPELLBOUND):[ ](\d+)>/i;

	  for (var n = 1; n < group.length; n++) {
		    var obj = group[n];
		    var notedata = obj.note.split(/[\r\n]+/);

		    for (var i = 0; i < notedata.length; i++) {
			      var line = notedata[i];

            // Catnip
			      if (line.match(note1)) {
                var code = Game_BattlerBase.TRAIT_SPECIAL_FLAG;
                var dataId = Game_BattlerBase.TRAIT_TEB_CATNIP;
                var value = 0;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Initial Battle State
            } else if (line.match(note2)) {
                var code = Game_BattlerBase.TRAIT_TEB_IBS;
                var dataId = Number(RegExp.$1);
                var value = 0;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Static HP Regeneration
            } else if (line.match(note3)) {
                var code = Game_BattlerBase.TRAIT_TEB_STATIC_HP_REGEN;
                var dataId = 0;
                var value = Number(RegExp.$1);
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Static MP Regeneration
            } else if (line.match(note4)) {
                var code = Game_BattlerBase.TRAIT_TEB_STATIC_MP_REGEN;
                var dataId = 0;
                var value = Number(RegExp.$1);
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Piercing Magic
            } else if (line.match(note5)) {
                var code = Game_BattlerBase.TRAIT_SPECIAL_FLAG;
                var dataId = Game_BattlerBase.TRAIT_TEB_PIERCING_MAGIC;
                var value = 0;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Ignore Counter
            } else if (line.match(note6)) {
                var code = Game_BattlerBase.TRAIT_SPECIAL_FLAG;
                var dataId = Game_BattlerBase.TRAIT_TEB_IGNORE_COUNTER;
                var value = 0;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Natural Cure
            } else if (line.match(note7)) {
                var code = Game_BattlerBase.TRAIT_TEB_NATURAL_CURE;
                var dataId = 0;
                var value = Number(RegExp.$1) / 100;
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);

            // Spellbound
            } else if (line.match(note8)) {
                var code = Game_BattlerBase.TRAIT_TEB_SPELLBOUND;
                var dataId = 0;
                var value = Number(RegExp.$1);
                var trait = [{"code":code,"dataId":dataId,"value":value}];
                obj.traits = obj.traits.concat(trait);
            }
		    }
	  }
};


//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.tebVictoryCry = function() {
    return this.specialFlag(Game_BattlerBase.TRAIT_TEB_VICTORY_CRY);
};

Game_BattlerBase.prototype.tebCatnip = function() {
    return this.specialFlag(Game_BattlerBase.TRAIT_TEB_CATNIP);
};

Game_BattlerBase.prototype.tebInitBattleState = function() {
    return this.traitsSet(Game_BattlerBase.TRAIT_TEB_IBS);
};

Game_BattlerBase.prototype.tebInitBattleStateParty = function() {
    return this.traitsSet(Game_BattlerBase.TRAIT_TEB_IBSP);
};

Game_BattlerBase.prototype.tebDiscount = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_DISCOUNT);
};

Game_BattlerBase.prototype.tebOvercharge = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_OVERCHARGE);
};

Game_BattlerBase.prototype.tebStaticHpRegen = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_STATIC_HP_REGEN);
};

Game_BattlerBase.prototype.tebStaticMpRegen = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_STATIC_MP_REGEN);
};

Game_BattlerBase.prototype.tebBerHpStatic = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_BER_HP_STATIC);
};

Game_BattlerBase.prototype.tebBerHpPercentage = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_BER_HP_PERCENTAGE);
};

Game_BattlerBase.prototype.tebBerMpStatic = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_BER_MP_STATIC);
};

Game_BattlerBase.prototype.tebBerMpPercentage = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_BER_MP_PERCENTAGE);
};

Game_BattlerBase.prototype.tebPiercingMagic = function() {
    return this.specialFlag(Game_BattlerBase.TRAIT_TEB_PIERCING_MAGIC);
};

Game_BattlerBase.prototype.tebIgnoreCounter = function() {
    return this.specialFlag(Game_BattlerBase.TRAIT_TEB_IGNORE_COUNTER);
};

Game_BattlerBase.prototype.tebNaturalCure = function() {
    return Math.max(this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_NATURAL_CURE), 0);
};

Game_BattlerBase.prototype.tebSpellbound = function() {
    return Math.max(this.traitsSumAll(Game_BattlerBase.TRAIT_TEB_SPELLBOUND), 0);
};

Moogle_X.TEB.Game_BattlerBase_resetStateCounts =
    Game_BattlerBase.prototype.resetStateCounts;
Game_BattlerBase.prototype.resetStateCounts = function(stateId) {
    Moogle_X.TEB.Game_BattlerBase_resetStateCounts.call(this, stateId);
    if (Moogle_X.TEB.spellboundList.contains(stateId)) {
        this._stateTurns[stateId] += this.tebSpellbound();
    }
};


//=============================================================================
// Game_Battler
//=============================================================================

Moogle_X.TEB.Game_Battler_onBattleEnd = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function() {
    Moogle_X.TEB.Game_Battler_onBattleEnd.call(this);
    this.tebApplyVictoryCry();
};

Game_Battler.prototype.tebApplyVictoryCry = function() {
    if (this.tebVictoryCry()) {
        if (this.isDead()) {
            if (Moogle_X.TEB.vCryRevive) {
                this._hp = this.mhp;
                this._mp = this.mmp;
            }
        } else {
            this._hp = this.mhp;
            this._mp = this.mmp;
        }
        this.refresh();
    }
};

Moogle_X.TEB.Game_Battler_onBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function() {
    Moogle_X.TEB.Game_Battler_onBattleStart.call(this);
    this.tebApplyInitBattleState();
};

Game_Battler.prototype.tebApplyInitBattleState = function() {
    this.tebInitBattleState().forEach(function(stateId) {
        this.addState(stateId);
    }, this);
};

Moogle_X.TEB.Game_Battler_onTurnEnd = Game_Battler.prototype.onTurnEnd;
Game_Battler.prototype.onTurnEnd = function() {
    Moogle_X.TEB.Game_Battler_onTurnEnd.call(this);
    this.tebApplyNaturalCure();
};

Game_Battler.prototype.tebApplyNaturalCure = function() {
    var chance = this.tebNaturalCure() || 0;
    if (Math.random() < chance) {
        for (var i = 0; i < Moogle_X.TEB.ntrCureList.length; i++) {
            this.removeState(Moogle_X.TEB.ntrCureList[i]);
        }
    }
};

Moogle_X.TEB.Game_Battler_regenerateHp = Game_Battler.prototype.regenerateHp;
Game_Battler.prototype.regenerateHp = function() {
    Moogle_X.TEB.Game_Battler_regenerateHp.call(this);
    this.tebRegenerateStaticHp();
};

Game_Battler.prototype.tebRegenerateStaticHp = function() {
    var value = Math.floor(this.tebStaticHpRegen());
    value = Math.max(value, -this.maxSlipDamage());
    if (value !== 0) {
        this.tebGainStaticHp(value);
    }
};

Game_Battler.prototype.tebGainStaticHp = function(value) {
    this._result.hpDamage = this._result.hpDamage || 0;
    this._result.hpDamage -= value;
    this._result.hpAffected = true;
    this.setHp(this.hp + value);
};

Moogle_X.TEB.Game_Battler_regenerateMp = Game_Battler.prototype.regenerateMp;
Game_Battler.prototype.regenerateMp = function() {
    Moogle_X.TEB.Game_Battler_regenerateMp.call(this);
    this.tebRegenerateStaticMp();
};

Game_Battler.prototype.tebRegenerateStaticMp = function() {
    var value = Math.floor(this.tebStaticMpRegen());
    if (value !== 0) {
        this.tebGainStaticMp(value);
    }
};

Game_Battler.prototype.tebGainStaticMp = function(value) {
    this._result.mpDamage = this._result.mpDamage || 0;
    this._result.mpDamage -= value;
    this.setMp(this.mp + value);
};


//=============================================================================
// Game_Actor
//=============================================================================

Moogle_X.TEB.Game_Actor_onBattleStart = Game_Actor.prototype.onBattleStart;
Game_Actor.prototype.onBattleStart = function() {
    Moogle_X.TEB.Game_Actor_onBattleStart.call(this);
    this.tebApplyInitBattleStateParty();
};

Game_Actor.prototype.tebApplyInitBattleStateParty = function() {
    this.tebInitBattleStateParty().forEach(function(stateId) {
        $gameParty.battleMembers().forEach(function(member) {
            member.addState(stateId);
        });
    });
};

Game_Actor.prototype.tebApplyBerAll = function() {
    this.tebApplyBerHp();
    this.tebApplyBerMp();
};

Game_Actor.prototype.tebApplyBerHp = function() {
    var berPercent = this.mhp * this.tebBerHpPercentage();
    var berStatic = this.tebBerHpStatic();
    var total = Math.floor(berPercent + berStatic);
    total = Math.max(total, -this.maxSlipDamage());
    this.setHp(this.hp + total);
};

Game_Actor.prototype.tebApplyBerMp = function() {
    var berPercent = this.mmp * this.tebBerMpPercentage();
    var berStatic = this.tebBerMpStatic();
    var total = Math.floor(berPercent + berStatic);
    this.setMp(this.mp + total);
};


//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.tebPartyDiscountRate = function() {
    var discountRate = 0;
    this.battleMembers().forEach(function(member) {
        discountRate += member.tebDiscount();
    });
    return discountRate;
};

Game_Party.prototype.tebPartyOverchargeRate = function() {
    var overchargeRate = 0;
    this.battleMembers().forEach(function(member) {
        overchargeRate += member.tebOvercharge();
    });
    return overchargeRate;
};


//=============================================================================
// Game_Action
//=============================================================================

Moogle_X.TEB.Game_Action_executeDamage = Game_Action.prototype.executeDamage;
Game_Action.prototype.executeDamage = function(target, value) {
    if (this.subject().isDying()) {
        if (this.subject().tebCatnip()) {
            if (value < 0) {
                value = -Moogle_X.TEB.catnipDamage;
            } else {
                value = Moogle_X.TEB.catnipDamage;
            }
            if (Moogle_X.TEB.catnipEffect) tempCatnip = true;
        }
    }
    Moogle_X.TEB.Game_Action_executeDamage.call(this, target, value);
};

if (Moogle_X.TEB.catnipEffect) {

var tempCatnip = false;

Moogle_X.TEB.Game_Action_itemEffectRecoverHp =
    Game_Action.prototype.itemEffectRecoverHp;
Game_Action.prototype.itemEffectRecoverHp = function(target, effect) {
    if ((this.subject().isDying() && this.subject().tebCatnip()) || tempCatnip) {
        var value = (target.mhp * effect.value1 + effect.value2) * target.rec;
        if (value < 0) {
            value = -Moogle_X.TEB.catnipDamage;
        } else {
            value = Moogle_X.TEB.catnipDamage;
        }
        if (value !== 0) {
            target.gainHp(value);
            this.makeSuccess(target);
        }
        tempCatnip = true;
    } else {
        Moogle_X.TEB.Game_Action_itemEffectRecoverHp.call(this, target, effect);
    }
};

Moogle_X.TEB.Game_Action_itemEffectRecoverMp =
    Game_Action.prototype.itemEffectRecoverMp;
Game_Action.prototype.itemEffectRecoverMp = function(target, effect) {
    if ((this.subject().isDying() && this.subject().tebCatnip()) || tempCatnip) {
        var value = (target.mmp * effect.value1 + effect.value2) * target.rec;
        if (value < 0) {
            value = -Moogle_X.TEB.catnipDamage;
        } else {
            value = Moogle_X.TEB.catnipDamage;
        }
        if (value !== 0) {
            target.gainMp(value);
            this.makeSuccess(target);
        }
        tempCatnip = true;
    } else {
        Moogle_X.TEB.Game_Action_itemEffectRecoverMp.call(this, target, effect);
    }
};

Moogle_X.TEB.Game_Action_itemEffectGainTp =
    Game_Action.prototype.itemEffectGainTp;
Game_Action.prototype.itemEffectGainTp = function(target, effect) {
    if ((this.subject().isDying() && this.subject().tebCatnip()) || tempCatnip) {
        var value = Math.floor(effect.value1);
        if (value < 0) {
            value = -Moogle_X.TEB.catnipDamage;
        } else {
            value = Moogle_X.TEB.catnipDamage;
        }
        if (value !== 0) {
            target.gainTp(value);
            this.makeSuccess(target);
        }
        tempCatnip = true;
    } else {
        Moogle_X.TEB.Game_Action_itemEffectGainTp.call(this, target, effect);
    }
};

Moogle_X.TEB.Game_Action_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    tempCatnip = false;
    Moogle_X.TEB.Game_Action_apply.call(this, target);
    tempCatnip = false;
};

} // Moogle_X.TEB.catnipEffect

Moogle_X.TEB.Game_Action_itemMrf = Game_Action.prototype.itemMrf;
Game_Action.prototype.itemMrf = function(target) {
    if (this.subject().tebPiercingMagic()) {
        return 0;
    } else {
        return Moogle_X.TEB.Game_Action_itemMrf.call(this, target);
    }
};

Moogle_X.TEB.Game_Action_itemCnt = Game_Action.prototype.itemCnt;
Game_Action.prototype.itemCnt = function(target) {
    if (this.subject().tebIgnoreCounter()) {
        return 0;
    } else {
        return Moogle_X.TEB.Game_Action_itemCnt.call(this, target);
    }
};


//=============================================================================
// Scene_Battle
//=============================================================================

Moogle_X.TEB.Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
    this.tebApplyBerAll();
    Moogle_X.TEB.Scene_Battle_terminate.call(this);
};

Scene_Battle.prototype.tebApplyBerAll = function() {
    if (Moogle_X.TEB.berInactive) {
        $gameParty.allMembers().forEach(function(member) {
            member.tebApplyBerAll();
        });
    } else {
        $gameParty.battleMembers().forEach(function(member) {
            member.tebApplyBerAll();
        });
    }
};


//=============================================================================
// Scene_Shop
//=============================================================================

/*
Moogle_X.TEB.Scene_Shop_buyingPrice = Scene_Shop.prototype.buyingPrice;
Scene_Shop.prototype.buyingPrice = function() {
    var discount = Math.floor(Moogle_X.TEB.Scene_Shop_buyingPrice.call(this) *
        $gameParty.tebPartyDiscountRate());
    return Math.max(Moogle_X.TEB.Scene_Shop_buyingPrice.call(this) - discount, 0);
};
*/

Moogle_X.TEB.Scene_Shop_sellingPrice = Scene_Shop.prototype.sellingPrice;
Scene_Shop.prototype.sellingPrice = function() {
    var overcharge = Math.floor(Moogle_X.TEB.Scene_Shop_sellingPrice.call(this) *
        $gameParty.tebPartyOverchargeRate());
    return Moogle_X.TEB.Scene_Shop_sellingPrice.call(this) + overcharge;
};


//=============================================================================
// Window_ShopBuy
//=============================================================================

Moogle_X.TEB.Window_ShopBuy_price = Window_ShopBuy.prototype.price;
Window_ShopBuy.prototype.price = function(item) {
    var discount = Math.floor(Moogle_X.TEB.Window_ShopBuy_price.call(this, item) *
        $gameParty.tebPartyDiscountRate());
    return Math.max(Moogle_X.TEB.Window_ShopBuy_price.call(this, item) - discount, 0);
};


})(); // IIFE

//=============================================================================
// End of File
//=============================================================================