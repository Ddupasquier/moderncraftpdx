<script lang="ts">
  export let member: {
    id: number;
    name: string;
    position: string;
    imageUrl: string;
    bio: string;
  };
</script>

<div class="team-member">
  <img src={member.imageUrl} alt={`Photo of ${member.name}`} class="team-member-image"/>
  <div class="team-member-info">
    <h3 class="team-member-name">{member.name}</h3>
    <p class="team-member-position">{member.position}</p>
    <p class="team-member-bio">{member.bio}</p>
  </div>
</div>

<style>
  .team-member {
    display: flex;
    background: var(--light-steel);
    height: 15rem;
    width: 25rem;
    padding: .5rem;
    overflow: hidden;
  }

  .team-member-image {
    object-fit: cover;
    height: 100%;
    max-width: 65%;
  }

  .team-member-info {
    padding: 8px 12px;
  }

  .team-member-name {
    margin: 0;
    font-size: 1.25rem;
  }

  .team-member-position {
    color: #666;
    margin: 4px 0;
  }

  .team-member-bio {
    margin: 0;
  }
</style>
