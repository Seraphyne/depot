# frozen_string_literal: true

class User < ApplicationRecord
  after_destroy :ensure_an_admin_remains
  validates :name, presence: true, uniqueness: true
  has_secure_password

  class Error < StandardError
  end

  private

  def ensure_an_admin_remains
    raise Error, "Can't delete the last user" if User.count.zero?
  end
end
