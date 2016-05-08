class CharactersController < ApplicationController
  before_filter :authorize

  def index
    @characters = current_user.characters
  end

  def create
    character_sheet = TravellerCharacterGenerator.new.create_starting_character
    current_user.characters.create(character_sheet: character_sheet)
    @characters = current_user.characters
  end

  def update
    if character = current_user.characters.find(params[:id])
      character.character_sheet['name'] = character_params[:characterSheet][:name]
      character.save!
    end

    render json: "Character updated", status: 200
  end

  def destroy
    if character = current_user.characters.find(params[:id])
      character.destroy!
    end

    @characters = current_user.characters
  end

  private

  def character_params
    params.require(:character).permit(characterSheet: [:name])
  end
end
