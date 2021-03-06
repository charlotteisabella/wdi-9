class PagesController < ApplicationController
  def landing
  end

  def time
    time = Time.now
    render :text => time
  end

  def uptime
    uptime = `uptime`.chomp
    render :text => uptime
  end

  def random
    sleep 2
    @random = Random.rand(1..255)
    render :text => @random
  end

  def info
    time = Time.now
    uptime = `uptime`.chomp
    random = Random.rand(1..255)

    info = {
      :time => time,
      :uptime => uptime,
      :random => random,
      :nelsonMunce => 'ha' * 80,
      :brother => %w{ Groucho Harpo Chico Zeppo }.sample
    }

    render :text => info.to_json
  end
end











