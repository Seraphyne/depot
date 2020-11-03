class Product < ApplicationRecord
    #validates method that checks if a field is mandatory
    # presence true don't let those fields be empty
    validates :title, :description, :image_url, presence: true
    validates :price, numericality: {greater_than_or_equal_to: 0.01}
    # price is valid and positive number bigger than 0.01
    validates :title, uniqueness: true
    # it will check to ensure that on that table there's only one title with that name
    validates :image_url, allow_blank: true, format: {
        with: %r{\.(gif|jpg|png)\Z}i,
        message: 'must be a URL for gif, jpg or png image.'
    }
    # checks for format and what is a valid submition for an image
end

# PAGE 87 forward.
