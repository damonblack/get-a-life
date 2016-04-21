class TravellerCharacterGenerator
  ATTRIBUTES = [ 
    :STR, 
    :DEX, 
    :END, 
    :INT, 
    :EDU,
    :SOC
  ]

  MODS = {
    0 => -3,
    1 => -2,
    2 => -2,
    3 => -1,
    4 => -1,
    5 => -1,
    6 => 0,
    7 => 0,
    8 => 0,
    9 => 1,
    10 => 1,
    11 => 1,
    12 => 2,
    13 => 2,
    14 => 2,
    15 => 3
  }

  def create_starting_character 
    character_sheet = {}
    character_sheet[:age] = 18
    roll_attributes(character_sheet)
  end

  def roll_attributes(character_sheet={})
    character_sheet[:attributes] ||= {}
    ATTRIBUTES.each do |attribute|
      character_sheet[:attributes][attribute] = roll_d6 + roll_d6
    end
    character_sheet 
  end

  def roll_d6
    1 + rand(6)
  end
end
