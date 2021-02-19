export interface PlayerStats {
  success: boolean;
  player: Player | null;
}
export interface Player {
  _id: string;
  uuid: string;
  displayname: string;
  firstLogin: number;
  knownAliases?: (string)[] | null;
  knownAliasesLower?: (string)[] | null;
  lastLogin: number;
  playername: string;
  achievementsOneTime?: (string)[] | null;
  lastLogout: number;
  stats: Stats;
  achievementTracking?: (null)[] | null;
  achievementPoints: number;
  achievements: Achievements;
  quickjoin_timestamp: number;
  quickjoin_uses: number;
  parkourCheckpointBests: ParkourCheckpointBests;
  levelingReward_0: boolean;
  karma: number;
  networkExp: number;
  achievementSync: AchievementSync;
  challenges: Challenges;
  petConsumables: PetConsumables;
  vanityMeta: QuakeOrPaintballOrVanityMeta;
  mostRecentGameType: string;
  parkourCompletions: ParkourCompletions;
  levelingReward_1: boolean;
}
export interface Stats {
  SkyWars: SkyWars;
  Arcade: Arcade;
  Duels: Duels;
  Bedwars: Bedwars;
  SkyBlock: SkyBlock;
  Pit: Pit;
  TNTGames: TNTGames;
  GingerBread: GingerBread;
  Quake: QuakeOrPaintballOrVanityMeta;
  VampireZ: VampireZ;
  Paintball: QuakeOrPaintballOrVanityMeta;
  HungerGames: HungerGames;
  MurderMystery: MurderMystery;
  BuildBattle: BuildBattle;
}
export interface SkyWars {
  souls: number;
  levelFormatted: string;
  packages?: (string)[] | null;
  activeKit_TEAMS_random: boolean;
  activeKit_TEAMS: string;
  games_played_skywars: number;
  blocks_placed: number;
  chests_opened: number;
  chests_opened_kit_mining_team_default: number;
  chests_opened_solo: number;
  coins: number;
  deaths: number;
  deaths_kit_mining_team_default: number;
  deaths_solo: number;
  deaths_solo_insane: number;
  lastMode: string;
  losses: number;
  losses_kit_mining_team_default: number;
  losses_solo: number;
  losses_solo_insane: number;
  quits: number;
  survived_players: number;
  survived_players_kit_mining_team_default: number;
  survived_players_solo: number;
  time_played: number;
  time_played_kit_mining_team_default: number;
  time_played_solo: number;
  win_streak: number;
  arrows_shot: number;
  arrows_shot_kit_mining_team_default: number;
  arrows_shot_solo: number;
  arrows_hit: number;
  arrows_hit_kit_mining_team_default: number;
  arrows_hit_solo: number;
  longest_bow_shot: number;
  longest_bow_shot_kit_mining_team_default: number;
  longest_bow_shot_solo: number;
  blocks_broken: number;
  skywars_experience: number;
  egg_thrown: number;
  games: number;
  games_kit_mining_team_default: number;
  games_solo: number;
  kills: number;
  kills_kit_mining_team_default: number;
  kills_monthly_a: number;
  kills_solo: number;
  kills_solo_insane: number;
  kills_weekly_a: number;
  most_kills_game: number;
  most_kills_game_kit_mining_team_default: number;
  most_kills_game_solo: number;
  souls_gathered: number;
  void_kills: number;
  void_kills_kit_mining_team_default: number;
  void_kills_solo: number;
}
export interface Arcade {
  coins: number;
  hitw_record_q: number;
  rounds_hole_in_the_wall: number;
  hitw_record_f: number;
  rounds_simon_says: number;
  bounty_kills_oneinthequiver: number;
  deaths_oneinthequiver: number;
  kills_oneinthequiver: number;
}
export interface Duels {
  all_modes_rookie_title_prestige: number;
  blitz_rookie_title_prestige: number;
  bridge_rookie_title_prestige: number;
  uhc_rookie_title_prestige: number;
  mega_walls_rookie_title_prestige: number;
  classic_rookie_title_prestige: number;
  combo_rookie_title_prestige: number;
  bow_rookie_title_prestige: number;
  op_rookie_title_prestige: number;
  no_debuff_rookie_title_prestige: number;
  sumo_rookie_title_prestige: number;
  skywars_rookie_title_prestige: number;
  tnt_games_rookie_title_prestige: number;
  selected_1_new: string;
  selected_2_new: string;
  duels_recently_played2: string;
  sw_duels_kit_new3: string;
  show_lb_option: string;
  games_played_duels: number;
  chat_enabled: string;
  current_winstreak: number;
  current_skywars_winstreak: number;
  current_winstreak_mode_sw_duel: number;
  blocks_placed: number;
  damage_dealt: number;
  deaths: number;
  losses: number;
  melee_hits: number;
  melee_swings: number;
  rounds_played: number;
  sw_duel_blocks_placed: number;
  sw_duel_damage_dealt: number;
  sw_duel_deaths: number;
  sw_duel_losses: number;
  sw_duel_melee_hits: number;
  sw_duel_melee_swings: number;
  sw_duel_rounds_played: number;
  current_uhc_winstreak: number;
  current_winstreak_mode_uhc_meetup: number;
  health_regenerated: number;
  uhc_meetup_damage_dealt: number;
  uhc_meetup_deaths: number;
  uhc_meetup_health_regenerated: number;
  uhc_meetup_losses: number;
  uhc_meetup_melee_hits: number;
  uhc_meetup_melee_swings: number;
  uhc_meetup_rounds_played: number;
  coins: number;
  uhc_meetup_blocks_placed: number;
}
export interface Bedwars {
  first_join_7: boolean;
  Experience: number;
  bedwars_boxes: number;
  games_played_bedwars_1: number;
  favourites_2: string;
  eight_one_winstreak: number;
  _items_purchased_bedwars: number;
  beds_broken_bedwars: number;
  beds_lost_bedwars: number;
  coins: number;
  deaths_bedwars: number;
  diamond_resources_collected_bedwars: number;
  eight_one__items_purchased_bedwars: number;
  eight_one_beds_broken_bedwars: number;
  eight_one_beds_lost_bedwars: number;
  eight_one_deaths_bedwars: number;
  eight_one_diamond_resources_collected_bedwars: number;
  eight_one_emerald_resources_collected_bedwars: number;
  eight_one_entity_attack_deaths_bedwars: number;
  eight_one_entity_attack_final_kills_bedwars: number;
  eight_one_entity_attack_kills_bedwars: number;
  eight_one_final_deaths_bedwars: number;
  eight_one_final_kills_bedwars: number;
  eight_one_games_played_bedwars: number;
  eight_one_gold_resources_collected_bedwars: number;
  eight_one_iron_resources_collected_bedwars: number;
  eight_one_items_purchased_bedwars: number;
  eight_one_kills_bedwars: number;
  eight_one_losses_bedwars: number;
  eight_one_resources_collected_bedwars: number;
  eight_one_void_deaths_bedwars: number;
  eight_one_void_final_deaths_bedwars: number;
  eight_one_void_kills_bedwars: number;
  emerald_resources_collected_bedwars: number;
  entity_attack_deaths_bedwars: number;
  entity_attack_final_kills_bedwars: number;
  entity_attack_kills_bedwars: number;
  final_deaths_bedwars: number;
  final_kills_bedwars: number;
  games_played_bedwars: number;
  gold_resources_collected_bedwars: number;
  iron_resources_collected_bedwars: number;
  items_purchased_bedwars: number;
  kills_bedwars: number;
  losses_bedwars: number;
  resources_collected_bedwars: number;
  void_deaths_bedwars: number;
  void_final_deaths_bedwars: number;
  void_kills_bedwars: number;
}
export interface SkyBlock {
  profiles: Profiles;
}
export interface Profiles {
  f873766118294909b1586bf3a01928c0: F873766118294909b1586bf3a01928c0;
}
export interface F873766118294909b1586bf3a01928c0 {
  profile_id: string;
  cute_name: string;
}
export interface Pit {
  profile: Profile;
  pit_stats_ptl: PitStatsPtl;
}
export interface Profile {
  moved_achievements_1: boolean;
  outgoing_offers?: (null)[] | null;
  moved_achievements_2: boolean;
  leaderboard_stats: LeaderboardStats;
  last_save: number;
  king_quest: KingQuest;
  inv_armor: InvArmorOrSpireStashInvOrInvContentsOrSpireStashArmor;
  login_messages?: (null)[] | null;
  spire_stash_inv: InvArmorOrSpireStashInvOrInvContentsOrSpireStashArmor;
  xp: number;
  inv_contents: InvArmorOrSpireStashInvOrInvContentsOrSpireStashArmor;
  zero_point_three_gold_transfer: boolean;
  bounties?: (null)[] | null;
  spire_stash_armor: InvArmorOrSpireStashInvOrInvContentsOrSpireStashArmor;
  cash: number;
  cash_during_prestige_0: number;
}
export interface LeaderboardStats {
}
export interface KingQuest {
  kills: number;
}
export interface InvArmorOrSpireStashInvOrInvContentsOrSpireStashArmor {
  type: number;
  data?: (number)[] | null;
}
export interface PitStatsPtl {
  bow_damage_received: number;
  cash_earned: number;
  damage_dealt: number;
  damage_received: number;
  deaths: number;
  joins: number;
  kills: number;
  launched_by_launchers: number;
  left_clicks: number;
  max_streak: number;
  melee_damage_dealt: number;
  melee_damage_received: number;
  sword_hits: number;
  assists: number;
}
export interface TNTGames {
  wins: number;
  new_firewizard_regen: number;
  new_pvprun_double_jumps: number;
  new_icewizard_regen: number;
  new_spleef_double_jumps: number;
  new_witherwizard_explode: number;
  packages?: (string)[] | null;
  new_bloodwizard_regen: number;
  new_kineticwizard_regen: number;
  new_bloodwizard_explode: number;
  new_kineticwizard_explode: number;
  new_icewizard_explode: number;
  new_tntrun_double_jumps: number;
  new_spleef_tripleshot: number;
  new_tntag_speedy: number;
  new_firewizard_explode: number;
  new_spleef_repulsor: number;
  new_witherwizard_regen: number;
  winstreak: number;
  deaths_bowspleef: number;
  coins: number;
  tags_bowspleef: number;
  run_potions_splashed_on_players: number;
  record_tntrun: number;
  deaths_tntrun: number;
}
export interface GingerBread {
  shoes_active: string;
  packages?: (string)[] | null;
  engine_active: string;
  frame_active: string;
  booster_active: string;
  skin_active: string;
  jacket_active: string;
  helmet_active: string;
  pants_active: string;
}
export interface QuakeOrPaintballOrVanityMeta {
  packages?: (string)[] | null;
}
export interface VampireZ {
  updated_stats: boolean;
}
export interface HungerGames {
  packages?: (string)[] | null;
  wins_backup: number;
  wins_solo_normal: number;
  wins_teams_normal: number;
  wins: number;
  autoarmor: boolean;
  chests_opened: number;
  chests_opened_knight: number;
  damage: number;
  damage_knight: number;
  damage_taken: number;
  damage_taken_knight: number;
  deaths: number;
  games_played: number;
  games_played_knight: number;
  time_played: number;
  time_played_knight: number;
  blitz_uses: number;
  potions_drunk: number;
  potions_drunk_knight: number;
}
export interface MurderMystery {
  murdermystery_books?: (string)[] | null;
  detective_chance: number;
  murderer_chance: number;
  coins: number;
  coins_pickedup: number;
  coins_pickedup_MURDER_CLASSIC: number;
  coins_pickedup_headquarters: number;
  coins_pickedup_headquarters_MURDER_CLASSIC: number;
  deaths: number;
  deaths_MURDER_CLASSIC: number;
  deaths_headquarters: number;
  deaths_headquarters_MURDER_CLASSIC: number;
  games: number;
  games_MURDER_CLASSIC: number;
  games_headquarters: number;
  games_headquarters_MURDER_CLASSIC: number;
  wins: number;
  wins_MURDER_CLASSIC: number;
  wins_headquarters: number;
  wins_headquarters_MURDER_CLASSIC: number;
}
export interface BuildBattle {
  coins: number;
  games_played: number;
  monthly_coins_a: number;
  score: number;
  solo_most_points: number;
  total_votes: number;
  weekly_coins_a: number;
}
export interface Achievements {
  skywars_you_re_a_star: number;
  bedwars_level: number;
  pit_gold: number;
  pit_kills: number;
  skywars_kills_solo: number;
  arcade_arcade_banker: number;
  general_coins: number;
  arena_climb_the_ranks: number;
  tntgames_tnt_triathlon: number;
  blitz_looter: number;
  tntgames_tnt_banker: number;
  general_challenger: number;
  bedwars_beds: number;
  bedwars_bedwars_killer: number;
  bedwars_collectors_edition: number;
  tntgames_block_runner: number;
  tntgames_clinic: number;
  murdermystery_hoarder: number;
  buildbattle_build_battle_voter: number;
  buildbattle_build_battle_points: number;
  buildbattle_build_battle_score: number;
  blitz_treasure_seeker: number;
  arcade_bounty_hunter: number;
}
export interface ParkourCheckpointBests {
  SkywarsAug2017: SkywarsAug2017;
  Bedwars: Bedwars1;
}
export interface SkywarsAug2017 {
  0: number;
  1: number;
  2: number;
}
export interface Bedwars1 {
  0: number;
  1: number;
  2: number;
  3: number;
}
export interface AchievementSync {
  quake_tiered: number;
}
export interface Challenges {
  all_time: AllTime;
}
export interface AllTime {
  ARCADE__hole_in_the_wall_challenge: number;
  BEDWARS__support: number;
  SURVIVAL_GAMES__star_challenge: number;
  BUILD_BATTLE__top_3_challenge: number;
}
export interface PetConsumables {
  BONE: number;
  BREAD: number;
  CAKE: number;
  FEATHER: number;
  GOLD_RECORD: number;
  LAVA_BUCKET: number;
  LEASH: number;
  MILK_BUCKET: number;
  MUSHROOM_SOUP: number;
  PORK: number;
  SLIME_BALL: number;
  STICK: number;
  WATER_BUCKET: number;
  WOOD_SWORD: number;
}
export interface ParkourCompletions {
  Bedwars?: (BedwarsEntity)[] | null;
}
export interface BedwarsEntity {
  timeStart: number;
  timeTook: number;
}
