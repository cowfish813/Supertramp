ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)
ENV["EXECJS_RUNTIME"] = "Node"
ENV["PATH"] = "/opt/homebrew/bin:#{ENV["PATH"]}"  # Ensure Homebrew Node is in PATH
require "bundler/setup" # Set up gems listed in the Gemfile.
require "bootsnap/setup" # Speed up boot time by caching expensive operations.
