<template>
	<v-app id="home">
		<v-container fill-height fluid>
			<v-layout align-center justify-center>
				<v-flex xs6 md4>
					<transition name="opening">
						<v-card v-if="clean">
							<v-form>
								<v-card-title>
									<v-flex xs12>
										<v-text-field
												v-model="name"
												label="Name"
												outline
										>
										</v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-btn block color="secondary" dark depressed large @click.prevent="enter">Enter</v-btn>
									</v-flex>
								</v-card-title>
							</v-form>
						</v-card>
					</transition>
				</v-flex>
			</v-layout>
		</v-container>
	</v-app>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				name: '',
				clean: true,
			}
		},
		methods: {
			enter () {
				this.clean = false;

			}
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes entrance {
		50% {
			transform: scaleY(0);
		}
		100%{
			transform: scaleY(1);
		}
	}
	.opening-enter-active, .opening-enter {
		transform: scaleY(1);
	}
	.opening-leave-active, .opening-leave {
		animation: entrance 2s;
	}

	#home {
		background-color: black;
	}
</style>