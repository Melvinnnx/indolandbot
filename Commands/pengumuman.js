function pengumuman(user, channel, params) {
    if (channel.id !== '959652901817569370') return 1;
  
    const infoChannel = channel.guild.channels.cache.get('953266597005525014');
    if (!params) return channel.send('```PAKAI : !pengumuman [Text]```');
  
    const message = params.join(' ');
    infoChannel.send(message);
    channel.send('```Pengumuman anda berhasil dikirimkan oleh Indoland Bot!```');
    return 1;
  }
  