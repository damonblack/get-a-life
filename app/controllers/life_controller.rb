class LifeController < ApplicationController
  before_filter :authorize

  def turn
    @character = current_user.characters.find(params[:character_id])

    @character.character_sheet['skills'] = params[:answer]
    @character.save!

  end
end
