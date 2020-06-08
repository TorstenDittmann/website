<script>

</script>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    min-height: 20vh;
    grid-template-areas: "title" "content";
  }

  .title,
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    grid-area: title;
    color: white;
    font-family: "Lora", serif;
    background-color: #df691a;
  }

  .content {
    grid-area: content;
    padding: 1rem;
    flex-direction: column;
  }

  @media (min-width: 960px) {
    section {
      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: 1fr;
      grid-template-areas: "title content";
    }

    .title {
      justify-content: flex-end;
      align-items: center;
    }

    .content {
      padding: 4rem;
      align-items: start;
    }
  }
</style>

<section>
  <div class="title">
    <slot name="title" />
  </div>
  <div class="content">
    <slot />
  </div>
</section>
